const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema( {
    lessonName: {type: String, required: true},
    content: {type: String, required: true},
    lessonOrder: {type: Number, required: true},
    chapterId : {type: mongoose.Schema.Types.ObjectId, required: true, ref:"Chapter"}
}, {timestamps: true});

module.exports = mongoose.model("Lesson", lessonSchema);