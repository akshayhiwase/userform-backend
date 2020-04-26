const mongoose = require("mongoose")
const schema = mongoose.Schema;

const user = new schema({
    email: String,
    name: String,
    dob: String,
    gender: String,
    country: String,
    state: String
})

module.exports = mongoose.model("User", user)