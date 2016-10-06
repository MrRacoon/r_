'use strict'

var repl = require('repl')
var Ramda = require('ramda');

var r = repl.start(' λ > ');

Object.defineProperty(r.context, 'R', {
    get: function () { return Ramda; },
    set: function () { return; }
});
