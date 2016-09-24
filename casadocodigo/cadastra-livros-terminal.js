var http = require('http');

var config = {
  hostname: 'localhost',
  port:3000,
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

var client = http.request(config, function(res) {
  console.log(res.statusCode);
  res.on('data', function(body) {
    console.log('body'+body);
  });
});

var user = {
  name: ' Mais sobre node',
  email: 'NOde Javascript e um pouco sobre http',
  cpf: 100,
  id: ''
};

client.end(JSON.stringify(user));
