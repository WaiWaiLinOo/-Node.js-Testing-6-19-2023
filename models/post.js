const mongoose = require('mongoose')
const {Schema} = mongoose;
const authorSchema = new Schema({
    name: String,
    age: Number,
  });
  const bookSchema = new Schema({
    title: String,
    authors: [authorSchema],
    categories: [String],
    price: Number,
    user_id: Number,
  });
const Book = mongoose.model("book", bookSchema);
module.exports = Book