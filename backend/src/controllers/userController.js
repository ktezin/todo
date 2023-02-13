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
		res.redirect("http://localhost:5173");
	});
});
