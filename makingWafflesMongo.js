const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017/WaffleHouse';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log("AHHHHHHH ERrorrororororor!!!!!!!!", err);
    return;
  }
  
  console.log("Connected successfully to server");


  const waffle1 = {shape: "square", origin: "Calgary", toppings: ["Heavy crude", "steak"]};

  db.collection('waffles').insert(waffle1, function(err, result) {
    if (err) {
      console.log("AHHHHHHH ERrorrororororor!!!!!!!!", err);
      return;
    }

    console.log("Added wafffle");

    db.collection('waffles').find({}).toArray((err, waffles) => {
      if (err) {
        console.log("AHHHHHHH ERrorrororororor!!!!!!!!", err);
        return;
      }
  
      console.log(waffles);
    });
    db.close();
  });
});





