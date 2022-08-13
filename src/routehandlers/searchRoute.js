const fs = require('fs');
const path = require('path');

const searchRoute = (req, res) => {
  const jsonFile = path.join(__dirname, '..', 'data.json');
  const search = req.url.split('/')[2].split('%20').join(' ');

  fs.readFile(jsonFile, (err, data) => {
    const jsonData = JSON.parse(data.toString());
    const result = [];
    const re = new RegExp(`^${search}`, 'gi');

    if (search) {
      for (let key in jsonData) {
        if (jsonData[key].match(re))
          result.push({ id: key, title: jsonData[key] });
      }
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  });
};

module.exports = searchRoute;
