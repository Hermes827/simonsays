const config = require("config");
const express = require('express')
const app = express()
// const port = 8000;
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes.js');
// app.use(express.json());
// app.use(userRouter);

// mongoose.connect("mongodb+srv://chris:battery@cluster0.wtmz3.mongodb.net/chris?retryWrites=true&w=majority", {
//   useNewUrlParser: true
// });
//
// app.listen(port, () => { console.log('Server is running...') });

//use config module to get the privatekey, if no private key set, end the application
if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
}

//connect to mongodb
mongoose
  .connect("mongodb://localhost/nodejsauth", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));


app.use(express.json());
//use users route for api/users
app.use("/api/users", userRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
