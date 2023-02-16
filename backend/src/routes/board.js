const express = require("express");
const router = express.Router();
const {
	getBoard,
	getBoards,
	createBoard,
	addIdea,
} = require("../controllers/boardController");

router.route("/boards").get(getBoards);
router.route("/boards/:id").get(getBoard).put(addIdea);
router.route("/board").post(createBoard);

module.exports = router;
