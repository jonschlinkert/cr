/*!
 * cr <https://github.com/jonschlinkert/cr>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }
  return str.replace(/\r\n|\r/g, '\n');
};

module.exports.strip = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }
  return str.split('\r').join('');
};
