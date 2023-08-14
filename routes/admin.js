const path = require('path');

const express = require('express');

const productController = require('../controllers/product');
const aboutController = require('../controllers/aboutUs');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',productController.getProducts );

// /admin/add-product => POST
router.post('/add-product',productController.postProducts );

router.get('/aboutus',aboutController.getAboutUs)
exports.routes = router;

