const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
    }, 
    password: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
    }, 
    pic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    }
}, {
    timestamps: true,
})

const User = mongoose.model("User", userSchema);

module.exports = User;