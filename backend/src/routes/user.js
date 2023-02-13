const express = require("express");
const passport = require("passport");
const { login, logout } = require("../controllers/userController");
const router = express.Router();

router.route("/login").get(login);
router.route("/logout").get(logout);

router
	.route("/auth/google")
	.get(passport.authenticate("google", ["email, profile"]));

router.route("/auth/google/callback").get(
	passport.authenticate("google", {
		successRedirect: "http://localhost:5173",
		failureRedirect: "http://localhost:5173/login",
	})
);

module.exports = router;
