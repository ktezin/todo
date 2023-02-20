const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Please enter task name"],
		maxLength: [60, "Task title must be less than 60 characters"],
	},
	description: {
		type: String,
		required: [true, "Please describe task details"],
		maxLength: [200, "Task title must be less than 200 characters"],
	},
	estimatedTime: {
		type: String,
		required: [true, "Please enter estimated time for this task"],
		maxLength: [40, "Estimated time must be less than 40 characters"],
	},
	votes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	],
	board: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Board",
		required: true,
	},
	createdBy: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Idea", ideaSchema);
