
module.exports.getAboutUs = (req, res, next) => {
    res.render('aboutUs', {
      pageTitle: 'about us page',
      path: '/admin/aboutUs',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }