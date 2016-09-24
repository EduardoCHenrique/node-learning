function ProdutosDAO(connection) {
  this._connection = connection;
}

ProdutosDAO.prototype.list = function(callback) {
  this._connection.query('select * from users', callback);
}

ProdutosDAO.prototype.listOne = function(callback, id) {
  this._connection.query('select * from users Where id = ?',id, callback);
}

ProdutosDAO.prototype.save = function(user, callback) {
  this._connection.query('insert into users set ?', user, callback);
}

ProdutosDAO.prototype.deletar = function(callback, id) {
  this._connection.query('delete id from users where id = ?',id, callback);
}

module.exports = function() {
  return ProdutosDAO;
}
