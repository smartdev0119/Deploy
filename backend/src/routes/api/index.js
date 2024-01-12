const express = require('express');
const router = express.Router();

router.use('/user', require('./User.api'));
router.use('/job', require('./Job.api'));

module.exports = router;