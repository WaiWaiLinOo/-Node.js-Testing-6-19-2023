const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/blog`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
// mongoose.connect(`mongodb://localhost:27017/blog`);
const userRoute = require('./routes/user')
const bookRoute = require('./routes/post')
const invertoryRoute = require('./routes/inventory')
app.use('/users',userRoute)
app.use('/books',bookRoute)
app.use('/inventory',invertoryRoute)
app.listen(3000, console.log("Server is running"));
