const { Schema, ...mongoose } = require('mongoose');


const StatesSchema = new Schema({
  name: String,
  capital: String,
  gov: String
});

const StateModel = mongoose.model('State', StatesSchema);

const LocalGovt = new Schema({
  name: String,
  headquarter: String,
  chairman: String,
  state: String,
});

const LocalGovtModel = mongoose.model('LocalGovernment', LocalGovt);


module.exports = {
  StateModel,
  LocalGovtModel
}