const fs = require('fs');

function save(obj, callback) {
  getAll((err, data) => {
    if (!data) {
      data = [];
    }
    obj.id = data.l
    ength;
    data.push(obj);
    fs.writeFile("./db.json", JSON.stringify(data), (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null, obj);
      }
    });
  });
}

function getAll(callback) {
  fs.readFile("./db.json", 'utf-8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, JSON.parse(data));
    }
  })
}

