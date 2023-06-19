const mongoose = require('mongoose');
const {Schema} = mongoose;
const sizeSchema = new Schema({
    h: Number,
    w: Number,
    uom: String,
  });
const inventorySchema = new Schema({
    item: String,
    qty: Number,
    tags : [String],
    size : sizeSchema
},
)
const inventory = mongoose.model("Inventory",inventorySchema)
module.exports = inventory