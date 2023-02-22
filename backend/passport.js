const passport = require("passport");
const User = require("./src/models/user");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: `http://localhost:${process.env.PORT}/api/auth/google/callback`,
			scope: ["profile", "email"],
		},
		async (accessToken, refreshToken, profile, done) => {
			const id = profile.id;
			const email = profile.emails[0].value;
			const firstName = profile.name.givenName;
			const lastName = profile.name.familyName;
			const profilePhoto = profile.photos[0].value;

			const currentUser = await User.findOne({
				email,
			});

			if (!currentUser) {
				const newUser = await User.create({
					id,
					firstName,
					lastName,
					email,
					profilePhoto,
				});
				return done(null, newUser);
			}

			currentUser.lastVisited = new Date();
			return done(null, currentUser);
		}
	)
);

passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: `http://localhost:${process.env.PORT}/api/auth/github/callback`,
			scope: ["user:email"],
		},
		async (accessToken, refreshToken, profile, done) => {
			const id = profile.id;
			const email = profile.emails[0].value;
			const firstName = profile.displayName.split(" ")[0];
			const lastName = profile.displayName.split(" ")[1];
			const profilePhoto = profile.photos[0].value;

			const currentUser = await User.findOne({
				email,
			});

			if (!currentUser) {
				const newUser = await User.create({
					id,
					firstName,
					lastName,
					email,
					profilePhoto,
				});
				return done(null, newUser);
			}

			currentUser.lastVisited = new Date();
			return done(null, currentUser);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const currentUser = await User.findOne({
		id,
	});
	done(null, currentUser);
});
