var http = require('http');
var url = require('url');
var router = require('./router');
var requestHandlers = require('./requestHandlers');
var handler = {}
handler['phones'] = requestHandlers.phones;
handler['apps'] = requestHandlers.apps;

http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  router.route(handler, pathname, res);
}).listen(3100);
