var drainer = function (queue, callback) {
  var errors = [];
  var iterator = new Array(queue.length);
    
  queue.forEach(function (fn) {
    fn(function (err) {
      iterator.pop();
      
      if (err) errors.push(err);
      if (!iterator.length) callback(errors);
    });
  });
};

module.exports = drainer;