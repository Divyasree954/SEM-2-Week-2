// models/userModel.js
const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},
{timestamps :false});
const Admin = mongoose.model('AdminLogin',adminSchema);
0
module.exports =Admin;
