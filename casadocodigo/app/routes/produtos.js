module.exports = function(app) {
    app.get('/produtos', function(req, res){
      var connection = app.infra.connectionFactory();
      var productsDAO = new app.infra.ProductsDAO(connection);

      productsDAO.list( function(err, results) {
        res.render('produtos/list', { list: results });
      });

      connection.end();
  });

  app.get('/produtos/form', function(req, res){
    res.render('produtos/form', { list: res });
  });

  app.post('/produtos/save', function(req, res) {
    var connection = app.infra.connectionFactory();
    var productsDAO = new app.infra.ProductsDAO(connection);
    var user = req.body;
    user.id='';
    productsDAO.save(user, function(err, results) {
      productsDAO.list(function(err, results) {
        res.render('produtos/list', {list: results})
      })
    });
  })

}
