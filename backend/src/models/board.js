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
	ideas: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Idea",
			required: true,
		},
	],
	tasks: [
		{
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
			status: {
				type: String,
				required: [true, "Please specify status of this task"],
				maxLength: [20, "Task status must be less than 20 characters"],
			},
			workingOn: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				required: true,
			},
			elapsedTime: {
				type: Number,
				default: 0,
			},
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				required: true,
			},
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Board", boardSchema);
