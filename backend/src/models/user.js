const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
	id: {
		type: String,
		default: null,
	},
	firstName: {
		type: String,
		required: [true, "Please enter your name"],
		trim: true,
		maxLength: [32, "Your name must be less than 32 characters"],
	},
	lastName: {
		type: String,
		required: [true, "Please enter your last name"],
		trim: true,
		maxLength: [32, "Your last name must be less than 32 characters"],
	},
	email: {
		type: String,
		required: [true, "Please enter email"],
		trim: true,
		maxLength: [64, "Your email must be less than 32 characters"],
		validate: [validator.isEmail, "Please enter a valid email"],
	},
	profilePhoto: {
		type: String,
		required: [true, "Please enter your profile photo"],
		trim: true,
	},
	lastVisited: {
		type: Date,
		default: Date.now,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("User", userSchema);
