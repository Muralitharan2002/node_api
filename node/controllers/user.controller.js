const user = require("../model/user.model");

const create = async (req, res) => {
    try {
        const { Name, DOB, Age, City } = req.body;

        const Data = await user.create({
            Name,
            DOB,
            Age,
            City
        })
        return res.json({ message: "Data Saved", Data })
    } catch (err) {
        return res.json({ "Error": err.message })
    }
}


const randomUser = async (req, res) => {
    try {
        const count = await user.countDocuments()

        const randomNumber = Math.floor(Math.random() * count)

        const randomUser = await user.findOne().skip(randomNumber);

        return res.json({ randomNumber, randomUser })
    } catch (err) {
        return res.json({ "Error": err.message })
    }
}

const checkExist = async (req, res) => {
    try {
        const { Name } = req.body;

        const exist = await user.findOne({ Name })

        if (exist) return res.json({ status: true, exist })

        return res.send(false)
    } catch (err) {
        return res.json({ "Error": err.message })
    }
}

const filterAge = async (req, res) => {
    try {
        const { Age } = req.body;

        const filter = await user.find({ Age: { $gte: Age } })

        if (filter.length !== 0) return res.json(filter)

        return res.send("no user")
    } catch (err) {
        return res.json({ "Error": err.message })
    }
}

const allNames = async (req, res) => {
    try {

        const filter = await user.find({}, { Name: 1, _id: 0 })

        if (filter.length !== 0) return res.send(filter)

        return res.send("no user")
    } catch (err) {
        return res.json({ "Error": err.message })
    }
}

const update = async (req, res) => {
    try {
        const { Name, location } = req.body;
        const finduser = await user.findOne({ Name })

        if (finduser) {
            const newlocation = finduser.City = location;

            await finduser.save();
            return res.json({ status: "updated", finduser })
        } else {
            return res.json({ message: "user not found" })
        }

    } catch (err) {
        return res.json({ "Error": err.message })
    }
}

module.exports = { create, randomUser, checkExist, filterAge, allNames, update }