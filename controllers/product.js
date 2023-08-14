const products = [];

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
    products.push({ title: req.body.title });
    res.redirect('/');
  }

  module.exports.products = products