var assert = require('assert')
    perfect = require('../index.js');

function randChar(size) {
  var result = '';
  while(size > 0) {
    result += String.fromCharCode( Math.floor(Math.random() * 94) + 32 );
    size--;
  }
  return result;
}

function randomHash(size) {
  var result = {};
  while(size > 0) {
    result[ randChar(10) ] = size;
    size--;
  }
  return result;
};

exports['can generate a perfect hash table for a random set of elements'] = function() {
  var dict = randomHash(100),
      tables = perfect.create(dict);

    console.log(dict);
//  console.log(tables);

  Object.keys(dict).forEach(function(key) {
    console.log('key: ' + key +' expected: ' + dict[key] +' value: ' +  perfect.lookup( tables[0], tables[1], key));
    assert.equal(dict[key], perfect.lookup( tables[0], tables[1], key));
  });
};

/*
exports['benchmark'] = function() {
  this.timeout(0);
  [100000, 500000, 1000000 ].forEach(function(size) {
    var dict = randomHash(size),
        start = Date.now();
    perfect.create(dict);
    var duration = Date.now() - start;
    console.log('Size: '+size + ' duration: ' +  duration);
  })
};
*/

// if this module is the script being run, then run the tests:
if (module == require.main) {
  var mocha = require('child_process').spawn('mocha', [ '--colors', '--ui', 'exports', '--reporter', 'spec', __filename ]);
  mocha.stdout.pipe(process.stdout);
  mocha.stderr.pipe(process.stderr);
}
