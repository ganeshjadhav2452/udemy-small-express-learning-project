// const products = [];
const Product = require('../models/product')

module.exports.getProducts = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }


  module.exports.postProducts = (req, res, next) => {
   const product =  new Product(req.body.title)
   product.saveProduct()
    // products.push({ title: req.body.title });
    res.redirect('/');
  }

  module.exports.getAllProducts = (req, res, next) => {
   Product.fetchAllProducts(products =>{
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
   });
  
  }

  // module.exports.products = products