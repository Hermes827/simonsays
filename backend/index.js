const config = require("config");
const mongoose = require("mongoose");
const usersRoute = require("./routes/userRoutes.js");
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());


//use config module to get the privatekey, if no private key set, end the application
if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
} else {
  console.log("got private key")
}

//connect to mongodb
mongoose.connect("mongodb+srv://chris:battery@cluster0.wtmz3.mongodb.net/chris?retryWrites=true&w=majority", {
  useNewUrlParser: true
})
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));


app.use(express.json());
//use users route for api/users
app.use("/api/users", usersRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
