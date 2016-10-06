r\_
==

[![dependencies Status](https://david-dm.org/MrRacoon/r_/status.svg)](https://david-dm.org/MrRacoon/r_)

A quick way to play with [RamdaJS][Ramda] from the command line.

Usage
-----

After starting the repl, you will get a typical node prompt. Use `R` to get to
Ramda.

```javascript
$ r_
λ > R.add(1)(1)
2

λ > R.view(R.lensProp('a'), { a: 3 })
3
```

Install
-------

**From NPM**

```bash
$ npm install -g r_
$ r_

λ >
```

**From Git**

```bash
$ git clone git@github.com:MrRacoon/r_.git
$ cd r_
$ npm install -g
$ r_


λ >
```

[Ramda]: http://ramdajs.com/docs/
