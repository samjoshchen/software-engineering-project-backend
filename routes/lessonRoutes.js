const express = require("express");
const { getLesson, getLessonByChapter } = require("../controllers/lessonController");
const router = express.Router();


router.get("/:id/lessons", getLessonByChapter)
router.get("/:id", getLesson)

module.exports = router