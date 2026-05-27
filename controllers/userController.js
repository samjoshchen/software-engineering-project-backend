const User = require("../models/User");

const getMe = async (req, res) => {
  try {
    const id = req.user.id

    const user = await User.findById(id).select("-password")

    return res.status(200).json(user)

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMe };