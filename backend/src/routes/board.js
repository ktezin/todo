const express = require("express");
const router = express.Router();
const { getBoard } = require("../controllers/boardController");

router.route("/boards/:id").get(getBoard);

module.exports = router;
