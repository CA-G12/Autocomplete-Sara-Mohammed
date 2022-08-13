const fs = require('fs');
const path = require('path');

const searchRoute = (req, res) => {
  const jsonFile = path.join(__dirname, '..', 'data.json');
  const search = req.url.split('/')[2].replace(/%20/g, ' ');

  fs.readFile(jsonFile, (err, data) => {
    const jsonData = JSON.parse(data.toString());
    const result = [];
    const re = new RegExp(`^${search}`, 'gi');

    if (err) {
      res.writeHead(500);
      res.end('<h1> internal server error </h1>');
    } else {
      if (search) {
        for (let key in jsonData) {
          if (jsonData[key].match(re))
            result.push({ id: key, title: jsonData[key] });
        }
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    }
  });
};

module.exports = searchRoute;
