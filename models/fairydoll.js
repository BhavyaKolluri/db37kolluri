const mongoose = require("mongoose")
const fairydollSchema = mongoose.Schema({
name: String,
color: String,
cost: {type:Number,min:15,max:100}} )
module.exports = mongoose.model("fairydoll",fairydollSchema)