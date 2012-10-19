# perfect

## A perfect minimal hash function generator

A perfect hash function for a set S is a hash function that maps distinct elements in S to a set of integers, with no collisions.

A minimal perfect hash function also yields a compact hash table, without any vacant slots.

http://en.wikipedia.org/wiki/Perfect_hash_function

The generator here is a port of [Steve Hanov's perfect minimal hash generator](http://stevehanov.ca/blog/index.php?id=119).

## Installing

    npm install --save perfect

## Usage example

    var perfect = require('perfect');

    var dict = { a: 'a', b: 'b', c: 'c', d: 'd' },
        tables = perfect.create(dict);

    Object.keys(dict).forEach(function(key) {
      console.log('key: ' + key + ' value: ' +  perfect.lookup( tables[0], tables[1], key));
    });
