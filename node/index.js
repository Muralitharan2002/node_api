const express = require("express")
require("dotenv").config()
const app = express()
const dbConnect = require("./config/db.config")
const router = require("./router/user.route")

const port = process.env.PORT || 8000

dbConnect()

app.use(express.json())
app.get("/", (req, res) => {
    res.send("node server running...")
})

app.use("/api", router)


app.listen(port, () => {
    console.log(`Server running successfully on port : ${port}`)
})
