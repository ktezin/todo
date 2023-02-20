const Board = require("../models/board");
const User = require("../models/user");
const Idea = require("../models/idea");
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
	if (!req.user) {
		res.status(401).json({
			message: "You must be logged in to see your boards",
			success: false,
		});
		return;
	}

	const board = await Board.findById(req.params.id);

	if (!board) {
		res.status(401).json({
			message: "Board couldn't found",
			success: false,
		});
		return;
	}

	if (!board.members.includes(req.user._id)) {
		res.status(401).json({
			message: "You are not permitted to access this board",
			success: false,
		});
		return;
	}

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

exports.addIdea = catchAsyncErrors(async (req, res, next) => {
	const { title, description, estimatedTime } = req.body;

	if (!req.user) {
		res.status(401).json({
			message: "You must be logged in to add ideas",
			success: false,
		});
		return;
	}

	const board = await Board.findById(req.params.id);

	if (!board) {
		res.status(401).json({
			message: "Board couldn't found",
			success: false,
		});
		return;
	}

	if (!board.members.includes(req.user._id)) {
		res.status(401).json({
			message: "You are not permitted to access this board",
			success: false,
		});
		return;
	}

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

exports.getIdeas = catchAsyncErrors(async (req, res, next) => {
	if (!req.user) {
		res.status(401).json({
			message: "You must be logged in to see your boards",
			success: false,
		});
		return;
	}

	const board = await Board.findById(req.params.id);

	if (!board) {
		res.status(401).json({
			message: "Board couldn't found",
			success: false,
		});
		return;
	}

	if (!board.members.includes(req.user._id)) {
		res.status(401).json({
			message: "You are not permitted to access this board",
			success: false,
		});
		return;
	}

	const ideas = await Idea.find({ board: req.params.id });

	res.status(200).json({ board: board, ideas: ideas, success: true });
});
