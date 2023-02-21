const express = require("express");
const router = express.Router();
const {
	getBoard,
	getBoards,
	createBoard,
	addIdea,
	getIdeas,
	upvoteIdea,
	getTasks,
	removeTask,
} = require("../controllers/boardController");

router.route("/boards").get(getBoards);
router.route("/boards/:id").get(getBoard);
router.route("/ideas/:id").get(getIdeas).post(addIdea);
router.route("/ideas/:id/upvote").post(upvoteIdea);
router.route("/ideas/:id/downvote").post(addIdea);
router.route("/tasks/:id").get(getTasks).put(removeTask);
router.route("/board").post(createBoard);

module.exports = router;
