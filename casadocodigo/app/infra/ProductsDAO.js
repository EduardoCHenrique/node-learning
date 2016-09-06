function ProdutosDAO(connection) {
  this._connection = connection;
}

ProdutosDAO.prototype.list = function(callback) {
  this._connection.query('select * from users', callback);
}

ProdutosDAO.prototype.save = function(user, callback) {
  this._connection.query('insert into users set ?', user, callback);
}

module.exports = function() {
  return ProdutosDAO;
}
