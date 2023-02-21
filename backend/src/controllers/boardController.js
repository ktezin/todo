const Board = require("../models/board");
const User = require("../models/user");
const Idea = require("../models/idea");
const Task = require("../models/task");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.getBoards = catchAsyncErrors(async (req, res, next) => {
	if (!req.user) {
		res.status(401).json({
			message: "You must be logged in to see your boards",
			success: false,
		});
		return;
	}

	const boards = await Board.find({
		members: req.user._id,
	});

	res.status(200).json({ boards: boards, success: true });
});

exports.getBoard = catchAsyncErrors(async (req, res, next) => {
	const board = await checkPermit(req, res, next);
	if (!board) return;

	res.status(200).json({ board: board, success: true });
});

exports.createBoard = catchAsyncErrors(async (req, res, next) => {
	const name = req.body.name;
	const user = req.user._id;

	if (!req.user) {
		res.status(401).json({
			message: "You must be logged in to create a board",
			success: false,
		});
		return;
	}

	const board = await Board.create({
		name,
		user,
	});

	board.members.push(user);
	await board.save();

	res.status(200).json({ board: board, success: true });
});

exports.getIdeas = catchAsyncErrors(async (req, res, next) => {
	const board = await checkPermit(req, res, next);
	if (!board) return;

	const ideas = await Idea.find({ board: req.params.id });

	res.status(200).json({ board: board, ideas: ideas, success: true });
});

exports.addIdea = catchAsyncErrors(async (req, res, next) => {
	const { title, description, estimatedTime } = req.body;

	const board = await checkPermit(req, res, next);
	if (!board) return;

	const user = await User.findById(req.user._id);
	const createdBy = user.firstName + " " + user.lastName;

	const idea = await Idea.create({
		title,
		description,
		estimatedTime,
		board: board._id,
		createdBy,
	});

	board.ideas.push(idea._id);
	await board.save();

	res.status(200).json({ board: board, idea: idea, success: true });
});

exports.upvoteIdea = catchAsyncErrors(async (req, res, next) => {
	const { ideaId } = req.body;

	const board = await checkPermit(req, res, next);
	if (!board) return;

	const idea = await Idea.findById(ideaId);
	if (!idea) {
		res.status(401).json({
			message: "Idea couldn't found",
			success: false,
		});
		return;
	}

	if (idea.votes.includes(req.user._id)) {
		const votes = idea.votes.filter((value) => value !== req.user._id);
		console.log(idea.votes, votes);
	} else {
		idea.votes.push(req.user._id);
		await idea.save();
		if (idea.votes.length >= board.members.length / 2) {
			await Task.create({
				title: idea.title,
				description: idea.description,
				estimatedTime: idea.estimatedTime,
				status: "todo",
				board: board._id,
				createdBy: idea.createdBy,
			});
			await idea.delete();
		}
	}

	res.status(200).json({ board: board, idea: idea, success: true });
});

exports.getTasks = catchAsyncErrors(async (req, res, next) => {
	const board = await checkPermit(req, res, next);
	if (!board) return;

	const tasks = await Task.find({ board: req.params.id });

	res.status(200).json({ board: board, tasks: tasks, success: true });
});

exports.removeTask = catchAsyncErrors(async (req, res, next) => {
	const { taskId } = req.body;

	const board = await checkPermit(req, res, next);
	if (!board) return;

	const task = await Task.findById(taskId);
	if (!task) {
		res.status(401).json({
			message: "Task couldn't found",
			success: false,
		});
		return;
	}
	await task.delete();

	res.status(200).json({ board: board, success: true });
});

async function checkPermit(req, res, next) {
	if (!req.user) {
		res.status(401).json({
			message: "You must be logged in to see your boards",
			success: false,
		});
		return null;
	}

	const board = await Board.findById(req.params.id);

	if (!board) {
		res.status(401).json({
			message: "Board couldn't found",
			success: false,
		});
		return null;
	}

	if (!board.members.includes(req.user._id)) {
		res.status(401).json({
			message: "You are not permitted to access this board",
			success: false,
		});
		return null;
	}
	return board;
}
