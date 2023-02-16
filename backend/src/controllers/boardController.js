const Board = require("../models/board");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.getBoards = catchAsyncErrors(async (req, res, next) => {
	const boards = await Board.find({ user: req.user._id });
	res.status(200).json({ boards: boards, success: true });
});

exports.getBoard = catchAsyncErrors(async (req, res, next) => {
	const board = await Board.findById(req.params.id);
	res.status(200).json({ board: board, success: true });
});

exports.createBoard = catchAsyncErrors(async (req, res, next) => {
	const name = req.body.name;
	const user = req.user._id;

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
	const user = req.user._id;
	const board = await Board.findByIdAndUpdate(req.params.id, {
		$push: {
			ideas: {
				title,
				description,
				estimatedTime,
				user,
			},
		},
	});
	res.status(200).json({ board: board, success: true });
});
