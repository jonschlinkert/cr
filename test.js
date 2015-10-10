'use strict';

require('mocha');
var assert = require('assert');
var cr = require('./');

describe('cr', function () {
  it('should convert carriage returns to newlines:', function () {
    assert.equal(cr('a\rb\r'), 'a\nb\n');
    assert.equal(cr('a\r\nb\r\n'), 'a\nb\n');
  });

  it('should throw an error when value is not a string:', function () {
    try {
      cr()
    } catch(err) {
      assert(err);
      assert(err.message);
      assert(err.message === 'expected a string');
    }
  });
});

describe('cr.strip', function () {
  it('should strip carriage returns:', function () {
    assert.equal(cr.strip('a\rb\r'), 'ab');
    assert.equal(cr.strip('a\r\nb\r\n'), 'a\nb\n');
  });

  it('should throw an error when value is not a string:', function () {
    try {
      cr.strip()
    } catch(err) {
      assert(err);
      assert(err.message);
      assert(err.message === 'expected a string');
    }
  });
});
