var mongoose = require("mongoose");
var hostSchema = new mongoose.Schema({
  name: String,
  email:String,
  phone:Number,
  address:String,
  hostId:String
});
module.exports = mongoose.model("host", hostSchema);
// ==========================================================
