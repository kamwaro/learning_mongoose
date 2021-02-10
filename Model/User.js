// Require mongoose
const mongoose = require('mongoose');
// Define a Schema
const Schema = mongoose.Schema;
// Create User Schema
const UserSchema = new Schema({
    name: String
});

module.exports =  mongoose.model('User',UserSchema);