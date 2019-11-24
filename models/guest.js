var mongoose = require("mongoose");
var guestSchema = new mongoose.Schema({
    checkIn:Date,
    checkOut:Date,
    name: String,
    email:String,
    phone:Number,
    desc:String,
    complete:Boolean,
    address:String
});
module.exports = mongoose.model("guest", guestSchema);
// ==========================================================
