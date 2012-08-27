node-here.js
============

https://github.com/cho45/node-here.js

node-here.js is here-document feature for node.js.

SYNOPSYS
========

This is implemeneted with block comment syntax.

```
var here = require('here').here;

var string = here(/*
  foo
  bar
  baz
*/);

```

DESCRIPTION
===========

## here(/* document */)

`here` function returns block comment on argument as string.

