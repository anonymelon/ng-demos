var fs = require('fs');

function phones(res, path) {
  try {
    data = require('./data' + path);
  } catch (err) {
    console.log('Load json data error' + err);
    res.writeHead('404', {
      "Content-Type": "text/html"
    });
    res.write("404 Not found");
    return res.end();
  }
  res.write(JSON.stringify(data));
  res.end();
}

function apps(res, path, contentType) {
  fs.readFile('app' + path, function(err, data) {
    if (err) {
      res.writeHead('404', {
        "Content-Type": "text/html"
      });
      res.write("404 Not found");
      return res.end();
    }
    res.writeHead('200', {
      "Content-Type": contentType
    });
    res.write(data);
    res.end();
  })
}

exports.phones = phones;
exports.apps = apps;
