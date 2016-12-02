'use strict'

var repl  = require('repl')
var R = require('ramda');

var r = repl.start(' λ > ');

Object.defineProperty(r.context, 'R', {
    get: function () { return R; },
    set: function () { return; }
});

R.forEach(function (key) {
    Object.defineProperty(r.context, key, {
        get: function () { return R[key]; },
        set: function () { return; }
    });
}, Object.keys(R));
