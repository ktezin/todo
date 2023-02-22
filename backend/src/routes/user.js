const express = require("express");
const passport = require("passport");
const { login, logout } = require("../controllers/userController");
const router = express.Router();

router.route("/login").get(login);
router.route("/logout").get(logout);

router
	.route("/auth/github/")
	.get(passport.authenticate("github", { scope: ["user:email"] }));

router.route("/auth/github/callback").get(
	passport.authenticate("github", {
		successRedirect:
			process.env.NODE_ENV === "PRODUCTION"
				? "http://localhost:" + process.env.PORT
				: "http://localhost:5173",
		failureRedirect:
			process.env.NODE_ENV === "PRODUCTION"
				? "http://localhost:" + process.env.PORT + "/login"
				: "http://localhost:5173/login",
	})
);

router
	.route("/auth/google")
	.get(passport.authenticate("google", ["email, profile"]));

router.route("/auth/google/callback").get(
	passport.authenticate("google", {
		successRedirect:
			process.env.NODE_ENV === "PRODUCTION"
				? "http://localhost:" + process.env.PORT
				: "http://localhost:5173",
		failureRedirect:
			process.env.NODE_ENV === "PRODUCTION"
				? "http://localhost:" + process.env.PORT + "/login"
				: "http://localhost:5173/login",
	})
);

module.exports = router;
