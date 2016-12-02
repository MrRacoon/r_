'use strict'

var repl  = require('repl');
var R = require('ramda');
var F = require('ramda-fantasy');

var r = repl.start(' λ > ');

// Ramda
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

// Ramda-Fantasy
Object.defineProperty(r.context, 'RF', {
    get: function () { return F; },
    set: function () { return; }
});

R.forEach(function (key) {
    Object.defineProperty(r.context, key, {
        get: function () { return F[key]; },
        set: function () { return; }
    });
}, Object.keys(F));

