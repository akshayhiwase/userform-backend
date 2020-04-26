const express = require("express")
const connectDb = require('./Db/db')
const User = require("./Db/userModel")
const cors = require("cors")
const app = express()
connectDb()

//Body Parser
app.use(cors())
app.use(express.json())

//Get all Users
app.get("/users", async (req, res) => {

    try {
        const user = await User.find()
        res.json({
            count: user.length,
            success: true,
            data: user
        })
    } catch (err) {
        console.log('err occured : ', err);

    }

})
app.post("/adduser", async (req, res) => {

    try {
        const user = new User(req.body)
        const newUser = await User.create(user)
        res.json({
            success: true,
            data: newUser
        })
    } catch (err) {
        console.log('err occured : ', err);

    }

})
app.get("/user/:id", async (req, res) => {

    try {
        const id = req.params.id
        const user = await User.findById(id)
        res.json(user)
    } catch (err) {
        console.log('err occured : ', err);

    }

})
app.delete("/user/:id", async (req, res) => {

    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        res.json({
            success: true,
            data: user,
            message: "Deleted Succesfully"
        })
    } catch (err) {
        console.log('err occured : ', err);

    }

})

//find user by email
app.get("/user", async (req, res) => {

    try {
        console.log(req.query);

        const user = await User.find({
            "email": req.query.mail
        })
        res.json(user)
    } catch (err) {
        console.log('err occured : ', err);

    }

})






let port = 4000;
app.listen(port, () => {
    console.log("Listenig from server" + port)
})