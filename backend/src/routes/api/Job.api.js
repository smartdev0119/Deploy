const express = require("express");
const router = express.Router();

const JobController = require("../../controller/Job.controller");

router.post("/", JobController.create);
router.get('/', JobController.list);
router.put('/:_id', JobController.update);
router.delete('/:_id', JobController.delete);

module.exports = router;
