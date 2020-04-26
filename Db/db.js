const mongoose = require("mongoose")
const connectionString = "mongodb://localhost:27017/userdata"
const connectDb = () => {
    mongoose.connect(connectionString, { useNewUrlParser: true })
        .then(() => {
            console.log("Database is connect")
        }).catch(err => console.log(err))
}

module.exports = connectDb;