const mongoose = require("mongoose");

const userSchema = new mongoose.Schema( {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    level: {type: Number, default: 1},
    exp: {type:Number, default: 0},
    progress: [{type: mongoose.Schema.Types.ObjectId, ref:"Lesson"}]
}, {timestamps: true} );

module.exports = mongoose.model("User", userSchema);