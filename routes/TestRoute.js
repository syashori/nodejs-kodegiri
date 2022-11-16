const express = require('express');
const {
    get,
    post
  } = require('../controllers/TestController.js');
  const { test } = require("../middleware/Test.js")

const router = express.Router();

router.get('/api/test', test, get);
router.post('/api/test', test, post);

module.exports = router;