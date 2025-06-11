const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({}, { strict: false })

module.exports = mongoose.model("MyCollection2", DataSchema);
