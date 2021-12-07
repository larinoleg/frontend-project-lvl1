#!/usr/bin/env node
import r from 'readline-sync';
import { greet } from './greet.js';

let k = 0;
greet();

while (k < 3) {
  let i = 0;
  let j = 2;
  const chislo = Math.floor(Math.random() * 10 + 1);

  while (j < 9) {
    if (chislo % j === 0 && j !== chislo) { i += 1; }
    j += 1;
  }

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Qestion: ${chislo}`);
  console.log(`i is ${i}`);
  const answ = r.question('Answer: ');
  if ((answ === 'yes' && i === 0) || (answ === 'no' && i !== 0) || (chislo === 2 && answ === 'yes')) {
    console.log('right'); }
  else { 
    console.log('wrong'); break; }
  k += 1;
}
