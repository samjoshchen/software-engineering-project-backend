const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema( {
    chapterName: {type: String, required: true},
    description: {type: String, required: true},
    chapterOrder: {type: Number, required: true}
}, {timestamps: true});

module.exports = mongoose.model("Chapter", chapterSchema);