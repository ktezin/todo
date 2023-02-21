const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter board name"],
		trim: true,
		maxLength: [60, "Board name must be less than 60 characters"],
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	members: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Board", boardSchema);
