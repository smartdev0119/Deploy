const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
  companyName: { type: String },
  hiringName: { type: String },
  email: { type: String },
  address: { type: String },
  state: { type: String },
  zip: { type: String },
  role: { type: String },
  title: { type: String },
  salary: { type: String },
  ote: { type: String },
  average: { type: String },
  industry: { type: String },
  description: { type: String },
  creDate: { type: String },
  expDate: { type: String },
  status: { type: String },
  companyDescription: { type: String },
  companyUrl: { type: String },
  imageUrl: { type: String },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isDel: Boolean
})

module.exports = mongoose.model("Jobs", JobsSchema);