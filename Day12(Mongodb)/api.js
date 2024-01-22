const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { StateModel, LocalGovtModel } = require('./models');

app.use(express.json());
// states returns all the states
// states/rivers returns all the LGA in rivers
// CREATE (POST), UPDATE (PUT), DELETE, READ (GET) LGA and states

app.get('/states', async (req, res) => {
    const states = await StateModel.find();
    res.json({ states });
});

app.get('/states/:state/lga', async (req, res) => {
    const lgas = await LocalGovtModel.find({ state: req.params.state });
    res.json({ lgas });
});


mongoose.connect('mongodb://127.0.0.1:27017/statesandcapita').then(() => {
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
})
.catch((err) => {
  console.log(err);
});