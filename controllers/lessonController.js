const Lesson = require("../models/Lesson")

const getLessonByChapter = async (req, res) => {
    try {
        const id = req.params.id
        const lesson = await Lesson.find({chapterId : id});
        return res.status(200).json(lesson);
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
};

const getLesson = async (req, res) => {
    try {
        const id = req.params.id
        const lesson = await Lesson.findById(id)
        return res.status(200).json(lesson);
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
};

module.exports = { getLessonByChapter, getLesson };