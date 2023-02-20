const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv").config({ path: "config.env" });
const connectDatabase = require("./src/config/db.config");
const board = require("./src/routes/board");
const user = require("./src/routes/user");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passportStrategy = require("./passport");

const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/", user);
app.use("/api/", board);

app.use(express.json({ limit: "50mb" }));
app.use(cors());

if (process.env.NODE_ENV === "PRODUCTION") {
	const dist = path.join(__dirname, "..", "frontend", "dist");
	app.use(express.static(dist));
	app.get("*", (req, res) => {
		res.sendFile(path.join(dist, "index.html"));
	});
}

connectDatabase().then(() => {
	app.listen(port, () => {
		console.log(`Server is listening on http://localhost:${process.env.PORT}`);
	});
});
