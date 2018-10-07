const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    
});

const User = mongoose.model('user', userSchema)

module.exports = User;