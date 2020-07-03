const express = require('express')
const app = express()
const port = 8000;
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes.js');
app.use(express.json());
app.use(userRouter);

mongoose.connect("mongodb+srv://chris:battery@cluster0.wtmz3.mongodb.net/chris?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

app.listen(port, () => { console.log('Server is running...') });
