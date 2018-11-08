

























function synchronous(time) {
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + time) {}
}
function asynchronous(time, callback) {
  setTimeout(callback, time);
}
