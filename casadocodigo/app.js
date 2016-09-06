var app = require('./config/express.js')();

app.listen(3000, function(req, res){
  console.log('Server is running on port:3000');
});
