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
  console.log('STATUSCODE: ',res.statusCode);
  res.on('data', function(body) {
    console.log('BODY: '+body);
  });
});

var user = {
  name: '',
  email: 'NOde Javascript e um pouco sobre http',
  cpf: 100,
  id: ''
};

client.end(JSON.stringify(user));
