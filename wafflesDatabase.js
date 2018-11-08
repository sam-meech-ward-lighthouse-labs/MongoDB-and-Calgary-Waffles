let waffles = [
  {
    origin: "Belgium",
    shape: "circle",
    toppings: ["blueberries", "🍁"]
  }
];

function saveNewWaffle(waffle, callback) {
  // 3 seconds to write
  waffles.push(waffle);
  asynchronous(3000, () => {
    callback(null);
  });
}
exports.saveNewWaffle = saveNewWaffle;

function getWaffles(callback) {
  // 4 seconds to read f
  asynchronous(4000, () => {
    callback(null, waffles);
  });
}
exports.getWaffles = getWaffles;





function synchronous(time) {
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + time) {}
}
function asynchronous(time, callback) {
  setTimeout(callback, time);
}
