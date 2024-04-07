const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = () => {
    const url = process.env.URL

    mongoose.connect(url)
        .then(() => {
            console.log("Database connected")
        })
        .catch((err) => {
            console.log("Database connection failed", err)
        })

}

module.exports = dbConnect