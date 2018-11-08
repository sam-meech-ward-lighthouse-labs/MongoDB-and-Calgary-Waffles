const database = require('./wafflesDatabase');

database.getWaffles((err, waffles) => {
  console.log(waffles);

  database.saveNewWaffle({shape: "square", origin: "Calgary", toppings: ["Heavy crude", "steak"]}, () => {
    
    database.getWaffles((err, waffles) => {
      console.log(waffles);
    });
  });
});


setInterval(() => {
  console.log("Normal application stuff");
}, 500)

