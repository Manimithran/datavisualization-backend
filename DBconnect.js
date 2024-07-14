const mongoose = require("mongoose");
require('dotenv').config();

function DBConnect() {
    const dbUri = process.env.DB_CONNECT;

    if (!dbUri) {
        console.error("MongoDB connection string is not defined in the environment variables");
        process.exit(1); // Exit the process with an error code
    }

    mongoose.connect(dbUri, {
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
