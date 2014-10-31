var fs = require('fs');
var frontendRes = {
  js: 'application/javascript',
  css: 'text/css',
  html: 'text/html',
  png: 'image/pneg',
  jpg: 'image/jpeg',
  map: 'application/octet-stream'
};
var backendRes = ['json'];
var allowRoutes = ['phones'];

function route(handler, pathname, res) {
  console.log('Request for path ' + pathname);
  suffixes = pathname.split('.');
  if (typeof(suffixes[suffixes.length - 1]) !== 'undefined' && Object.keys(frontendRes).indexOf(suffixes[suffixes.length - 1]) !== -1) {
    handler.apps(res, pathname, frontendRes[suffixes[suffixes.length - 1]]);
  } else if (backendRes.indexOf(suffixes[1]) !== -1 || allowRoutes.indexOf(suffixes[0].split('/')[1]) !== -1) {
    handler.phones(res, suffixes[0] + '.json');
  } else {
    console.log("No request handler found for " + pathname);
    fs.readFile('./app/index.html', function(err, data) {
      if (err) {
        res.writeHead('404', {
          "Content-Type": "text/html"
        });
        res.write("404 Not found");
        return res.end();
      }
      res.writeHead('200', {
        "Content-Type": "text/html"
      });
      res.write(data);
      return res.end();
    })
  }
}

exports.route = route;
