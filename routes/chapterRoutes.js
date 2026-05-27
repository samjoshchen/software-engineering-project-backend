const express = require("express");
const { getChapters } = require("../controllers/chapterController");
const { getLessonByChapter } = require("../controllers/lessonController");

const router = express.Router();


router.get("/", getChapters)
router.get("/:id/lessons", getLessonByChapter)

module.exports = router