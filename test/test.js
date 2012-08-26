#!/usr/bin/env node

var assert = require('assert');

var here = require('../lib/here.js').here;

assert.equal(here(/*
	foobar
	baz
	piyo
*/), "\tfoobar\n\tbaz\n\tpiyo");

assert.equal(here(/* foobar */), "foobar");

(function () {
	assert.equal(here(/*
		foobar
		baz
		piyo
	*/), "\t\tfoobar\n\t\tbaz\n\t\tpiyo\n");

	assert.equal(here(/* foobar */), "foobar");
})();


assert.equal(here(/*
	foobar
	baz
	piyo
*/).unindent(), "foobar\nbaz\npiyo");

assert.equal(here(/*
    foobar
    baz
    piyo
*/).unindent(), "foobar\nbaz\npiyo");

assert.equal(here(), '');




var section = require('../lib/here.js').section;

assert.equal(section('foo'), "aaa\nbbb\n\nccc\n");
assert.equal(section('bar'), "ddd\neee\nfff\n");
assert.equal(section('baz'), "aaa\nbbb\nccc\n");


//@foo
// aaa
// bbb
//
// ccc
//@bar
// ddd
// eee
// fff

//@baz
// aaa
// bbb
// ccc
