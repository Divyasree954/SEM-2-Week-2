// config/db.js
const mongoose = require("mongoose");
require('dotenv').config();

const connecttoDB = async () => {
    try {
        await mongoose.connect(process.env.DBCONNECT); 
        console.log('DB connected successfully');
    } catch (error) {
        console.error('DB connection failed:', error);
    }
};
module.exports = connecttoDB;
