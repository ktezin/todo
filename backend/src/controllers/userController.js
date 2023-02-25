const User = require("../models/user");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.login = catchAsyncErrors(async (req, res, next) => {
	if (req.user) {
		res.status(200).json({
			user: req.user,
			message: "Successfully logged in",
			success: true,
		});
	} else {
		res.status(401).json({ message: "Login failure", success: false });
	}
});

exports.logout = catchAsyncErrors(async (req, res, next) => {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.redirect(
			process.env.NODE_ENV === "PRODUCTION"
				? "http://localhost:" + process.env.PORT
				: "http://localhost:5173"
		);
	});
});

exports.getUser = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.params.id);
	if (!user) {
		res.status(400).json({
			message: "User not found",
			success: false,
		});
		return;
	}
	res.status(401).json({
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		profilePhoto: user.profilePhoto,
		success: true,
	});
});
