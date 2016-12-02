r\_
==

[![dependencies Status](https://david-dm.org/MrRacoon/r_/status.svg)](https://david-dm.org/MrRacoon/r_)

A quick way to play with [RamdaJS][Ramda] from the command line.

Usage
-----

After starting the repl, you will get a typical node prompt. but, all of
Ramda's functions should be availible. You shouldn't even have to reference
`R`! (It's there if you want it though. So you can copy and paste common online
code into the repl).

```javascript
$ r_
λ > add(1)(1)
2

λ > view(lensProp('a'), { a: 3 })
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
