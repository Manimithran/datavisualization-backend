const mongoose = require("mongoose");
require('dotenv').config();


function DBConnect() {
    mongoose.connect(process.env.DbConnect, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((error) => {
        console.error("DB connection error: ", error);
    });
}

module.exports = DBConnect;
