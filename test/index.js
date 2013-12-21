var drainer = require('../');
var test = require('tape');
var sinon = require('sinon');

test('executes all methods in queue', function (t) {
  var spy = sinon.spy();
  
  var queue = [
    function (done) {
      setTimeout(function () {
        spy();
        done();
      }, 100);
    },
    function (done) {
      spy();
      done();
    }
  ];
  
  drainer(queue, function () {
    t.ok(spy.calledTwice);
    t.end();
  });
});

test('returns array of error to final callback', function (t) {
  var queue = [
    function (done) {
      done('error 1');
    },
    function (done) {
      done('error 2');
    }
  ];
  
  drainer(queue, function (err) {
    t.deepEqual(err, ['error 1', 'error 2']);
    t.end();
  });
});