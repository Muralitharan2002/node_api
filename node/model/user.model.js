const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Name: String,
    DOB: Date,
    Age: Number,
    City: String
})

const user = mongoose.model("Data", userSchema)

module.exports = user