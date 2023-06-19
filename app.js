const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/blog`);
const userRoute = require('./routes/user')
const bookRoute = require('./routes/post')
app.use('/users',userRoute)
app.use('/books',bookRoute)
app.listen(3000, console.log("Server is running"));
