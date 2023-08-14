const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('../controllers/product');

const router = express.Router();

router.get('/',adminData.getAllProducts );

module.exports = router;
