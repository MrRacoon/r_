'use strict'

var Janeway = require('janeway');
var R = require('ramda');
var F = require('ramda-fantasy');

// Ramda
Object.defineProperty(global, 'R', {
    get: function () { return R; },
    set: function () { return; }
});

R.forEach(function (key) {
    Object.defineProperty(global, key, {
        get: function () { return R[key]; },
        set: function () { return; }
    });
}, Object.keys(R));

// Ramda-Fantasy
Object.defineProperty(global, 'RF', {
    get: function () { return F; },
    set: function () { return; }
});

R.forEach(function (key) {
    Object.defineProperty(global, key, {
        get: function () { return F[key]; },
        set: function () { return; }
    });
}, Object.keys(F));

// GO!
Janeway.start(function started() {
    Janeway.setTitle('r_');
});
