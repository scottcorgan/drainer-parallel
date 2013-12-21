# drainer-parallel

Queue and drain an array of functions in parallel. This is a related module to [drainer](https://github.com/scottcorgan/drainer)

## Install

```
npm install drainer-parallel --save
```

## Usage

```js
var drainer = require('drainer-parallel');

var queue = [
  function (done) {
    setTimeout(function () {
      done();
    }, 100);
  },
  function (done) {
    // do something
    done();
  }
];

var drainer(queue, function (err) {
  // All done
});
```

### Handling Errors

Each function in the array recieves a callback, `done()`, to call when function in queue is complete. If you provide an argument to this callback, it will be passed into an array of errors that is passed to the final callback.

The finally callback will be called once all the items in the queue have been drained.

## Run Tests

```js
npm install
npm test
```
