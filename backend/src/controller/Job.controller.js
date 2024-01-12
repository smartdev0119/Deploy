const Job = require("../models/Job");

exports.create = (req, res) => {
  const { companyName, hiringName, email,
    address, city, state, zip, role, title,
    compensation, salary, ote, average,
    industry, description, creDate,
    expDate, status, companyDescription,
    companyUrl, imageUrl
  } = req.body;

  const newJob = {
    companyName: companyName,
    salary: salary,
    industry: industry,
    description: description
  }

  Job.create(newJob)
    .then(data => { res.res(data); })
    .catch(err => { res.err(err); });
};

exports.list = (req, res) => {
  const { search, filter } = req.query;

  var condition = search ?
    {
      companyName: { $regex: new RegExp(search), $options: 'i' },
      email: { $regex: new RegExp(search), $options: 'i' },
      description: { $regex: new RegExp(search), $options: 'i' },
    } : {};

  Job.find(condition)
    .then((jobs) => res.res(jobs))
    .catch((err) => res.err(err));
}

exports.update = async (req, res) => {
  const { params } = req.params;
  const { data } = req.body;

  Job.findByIdAndDelete(params, data)
    .then(() => res.res(null))
    .catch((err) => res.err(err));
};

exports.delete = async (req, res) => {
  const { params } = req.params;

  Job.findByIdAndDelete(params)
    .then(() => res.res(null))
    .catch((err) => res.err(err));
};
