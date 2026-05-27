const Chapter = require("../models/Chapter")

const getChapters = async (req, res) => {
    try {
        const chapters = await Chapter.find();
        return res.status(200).json(chapters);
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
};

module.exports = { getChapters };