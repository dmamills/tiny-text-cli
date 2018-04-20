#!/usr/bin/env node
'use strict';
const meow = require('meow');
const tinyText = require('tiny-text');

const cli = meow(`
  tinytext <text>
`);

function tt() {
  console.log(tinyText(cli.input.join(' ')));
}

tt();
