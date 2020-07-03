const express = require('express');
const userModel = require('../models/userModel.js');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/users', async (req, res) => {
  const users = await userModel.find({});
  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/users', async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

  app.delete('/user/:id', async (req, res) => {
  try {
    const stat = await userModel.findByIdAndDelete(req.params.id)

    if (!stat) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app
