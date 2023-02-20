const express = require("express");
const router = express.Router();
const {
	getBoard,
	getBoards,
	createBoard,
	addIdea,
	getIdeas,
} = require("../controllers/boardController");

router.route("/boards").get(getBoards);
router.route("/boards/:id").get(getBoard);
router.route("/ideas/:id").get(getIdeas).post(addIdea);
router.route("/board").post(createBoard);

module.exports = router;
