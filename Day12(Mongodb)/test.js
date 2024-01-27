const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { StateModel, LocalGovtModel } = require("./models");
const { body, validationResult } = require('express-validator');

app.use(express.json());

// states returns all the states
// states/rivers returns all the LGA in rivers
// CREATE (POST), UPDATE (PUT), DELETE, READ (GET) LGA and states

app.get("/states", async (req, res) => {
  const states = await StateModel.find();
  res.json({ states });
});

app.post('/states', 
    body('name').exists().isString().notEmpty(),
    body('captial').exists().isString().notEmpty(),
    body('gov').exists().isString().notEmpty(),
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({
                message: 'Error in your stuff',
                ...result
            });
        }
        const createdState = await StateModel.create({
            name: req.body.name,
            capital: req.body.capital,
            gov: req.body.gov
        });
        res.json({ state: createdState });
});

app.get(
    "/states/:state/lga",
    async (req, res) => {
        const { state } = req.params;
        const stateDetails = await StateModel.findOne({ _id: req.params.state }).catch(() => null);
        if(!stateDetails) {
            return res.status(404).json({
                message: `State ${state} does not exist`
            });
        }
        const lgas = await LocalGovtModel.find({ state: req.params.state });
        res.json({ lgas });
});

app.post("/states/:state/lga", async (req, res) => {
  const { state, } = req.params;
  const stateDetails = await StateModel.findOne({ _id: req.params.state }).catch(() => null);
  if(!stateDetails) {
    return res.status(404).json({
        message: `State ${state} does not exist`
    });
  }
  const lga = await LocalGovtModel.create({ 
    state: req.params.state,
    name: req.body.name,
    headquarter: req.body.headquarter,
    chairman: req.body.chairman,
  });
  res.json({ lga });
});

// UPDATE states and LGA, add body validation
// DELETE 
// https://mongoosejs.com/docs/

mongoose
  .connect("mongodb://127.0.0.1:27017/statesandcapita")
  .then(() => {
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// npm i -s express mongoose

app.put("/states/:state", 
    body('name').exists().isString().notEmpty(),
    body('capital').exists().isString().notEmpty(),
    body('gov').exists().isString().notEmpty(),
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({
                message: 'Error in your stuff',
                ...result
            });
        }

        const updatedState = await StateModel.findByIdAndUpdate(
            req.params.state,
            {
                $set: {
                    name: req.body.name,
                    capital: req.body.capital,
                    gov: req.body.gov,
                }
            },
            { new: true }
        );

        if (!updatedState) {
            return res.status(404).json({
                message: `State ${req.params.state} does not exist`
            });
        }

        res.json({ state: updatedState });
    });

// Update Operation for LGAs
app.put("/states/:state/lga/:lga", 
    body('name').exists().isString().notEmpty(),
    body('headquarter').exists().isString().notEmpty(),
    body('chairman').exists().isString().notEmpty(),
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({
                message: 'Error in your stuff',
                ...result
            });
        }

        const updatedLGA = await LocalGovtModel.findByIdAndUpdate(
            req.params.lga,
            {
                $set: {
                    name: req.body.name,
                    headquarter: req.body.headquarter,
                    chairman: req.body.chairman,
                }
            },
            { new: true }
        );

        if (!updatedLGA) {
            return res.status(404).json({
                message: `LGA ${req.params.lga} does not exist`
            });
        }

        res.json({ lga: updatedLGA });
    });

// Delete Operation for States
app.delete("/states/:state", async (req, res) => {
    const deletedState = await StateModel.findByIdAndDelete(req.params.state);

    if (!deletedState) {
        return res.status(404).json({
            message: `State ${req.params.state} does not exist`
        });
    }

    res.json({ message: `State ${req.params.state} deleted successfully` });
});

// Delete Operation for LGAs
app.delete("/states/:state/lga/:lga", async (req, res) => {
    const deletedLGA = await LocalGovtModel.findByIdAndDelete(req.params.lga);

    if (!deletedLGA) {
        return res.status(404).json({
            message: `LGA ${req.params.lga} does not exist`
        });
    }

    res.json({ message: `LGA ${req.params.lga} deleted successfully` });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/statesandcapita")
  .then(() => {
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });