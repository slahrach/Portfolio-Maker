const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName : {type : String, required : true},
    secondName : {type : String, required : true},
    userName : {type : String, required : true},
    job : {type : String, required : true},
    aboutYou : String,
});

module.exports = mongoose.model("User", UserSchema);