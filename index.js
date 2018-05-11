#!/usr/bin/env node
'use strict';
const meow = require('meow');
const tinyText = require('tiny-text');

const cli = meow(`
  tinytext <text>
`);

function tt() {
  const tinyBois = tinyText(cli.input.join(' '));
  process.stdout.write(`${tinyBois}\n`);
}

tt();
