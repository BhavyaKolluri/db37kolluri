const mongoose = require("mongoose")
const fairydollSchema = mongoose.Schema({
name: String,
color: String,
cost: Number
})
module.exports = mongoose.model("Fairydoll",fairydollSchema)
