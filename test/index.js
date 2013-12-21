var drainer = require('../');
var test = require('tape');
var sinon = require('sinon');

var queue = [
  function (done) {
    setTimeout(function () {
      console.log('function 1');
      done('error fn 1');
    }, 100);
  },
  function (done) {
    console.log('function 2');
    done();
  },
  function (done) {
    console.log('function 3');
    done('error fn 3');
  }
];

drainer(queue, function (err) {
  console.log('done', err);
});

// test('executes all methods in queue', function (t) {
//   var spy = sinon.spy();
//   var queue = [
//     function (next) {
//       spy();
//       next();
//     },
//     function (next) {
//       spy();
//       next();
//     }
//   ];
  
//   drainer(queue, function () {
//     t.ok(spy.calledTwice);
//     t.end();
//   });
// });

// test('executes callback after all methods in queue have been called', function (t) {
//   drainer([], function () {
//     t.end();
//   });
// });

// test('exits early with error as callback argument', function (t) {
//   var spy = sinon.spy();
  
//   var queue = [
//     function (next) {
//       next('the error');
//     },
//     function (next) {
//       console.log('func2');
//       next();
//     }
//   ];
  
//   drainer(queue, function (err) {
//     t.equal(err, 'the error');
//     t.notOk(spy.called);
//     t.end();
//   });
// });

// test('passes arguments to the next method in the list', function (t) {
//   var passedArg;
  
//   var queue = [
//     function (next) {
//       next(null, 'arg1');
//     },
//     function (arg1, next) {
//       passedArg = arg1;
//       next();
//     }
//   ];
  
//   drainer(queue, function () {
//     t.equal(passedArg, 'arg1');
//     t.end();
//   });
// });

// test('passes last arguments to callback', function (t) {
//   var queue = [
//     function (next) {
//       next();
//     },
//     function (next) {
//       next(null, 'arg1');
//     }
//   ];
  
//   drainer(queue, function (err, arg1) {
//     t.equal(arg1, 'arg1');
//     t.end();
//   });
// });