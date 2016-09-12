module.exports = function(app) {
  var listaProdutos = function(req, res){
      var connection = app.infra.connectionFactory();
      var productsDAO = new app.infra.ProductsDAO(connection);

      productsDAO.list( function(err, results) {
        res.render('produtos/list', { list: results });
      });

      connection.end();
  };

  app.get('/produtos', listaProdutos);

  app.get('/produtos/form', function(req, res){
    res.render('produtos/form', { list: res });
  });

  app.post('/produtos/save', function(req, res) {
    var connection = app.infra.connectionFactory();
    var productsDAO = new app.infra.ProductsDAO(connection);
    var user = req.body;
    user.id='';
    productsDAO.save(user, function(err, results) {
      console.log('RRRRRRRRRRRRR', results);

      res.redirect('/produtos');
    });
  });
}
