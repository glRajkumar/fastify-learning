const mongoose = require('mongoose')

async function connectDb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/test1", {
            useUnifiedTopology: true, useNewUrlParser: true
        })
        console.log("MongoDB is connected now")

    } catch (error) {
        console.log("cant connect to db")
        //Exit the process with failure
        process.exit(1)
    }
}

module.exports = connectDb