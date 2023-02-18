const Board = require("../models/board");
const User = require("../models/user");
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
	console.log(board);

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

	const user = await User.findById(req.user._id);
	const addedBy = user.firstName + " " + user.lastName;
	const board = await Board.findById(req.params.id, {
		members: req.user._id,
	});

	if (!board) {
		res.status(401).json({
			message: "Board couldn't found", // or board is found but members does not contain the user
			success: false,
		});
		return;
	}

	board.ideas.push({
		title,
		description,
		estimatedTime,
		addedBy,
	});

	await board.save();
	res.status(200).json({ board: board, success: true });
});
