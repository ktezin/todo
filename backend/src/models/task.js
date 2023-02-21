const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Task", taskSchema);
