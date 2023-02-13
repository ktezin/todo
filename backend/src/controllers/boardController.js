const board = require("../models/board");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.getBoard = catchAsyncErrors(async (req, res, next) => {

});

exports.createBoard = catchAsyncErrors(async (req, res, next) => {
	const name = req.body.name;
	const uploader = req.user._id;
});
