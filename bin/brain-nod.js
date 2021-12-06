#!/usr/bin/env node
import r from 'readline-sync';
import {greet} from './greet.js';


let k = 0;
let i = 0;
let j = 2;
let currentNod = 1;


greet();

while (i < 3) {
    console.log('Find the common greatest divider of numbers:');
    let firstNumber = Math.floor(Math.random()*100);
    let secondNumber = Math.floor(Math.random()*100);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    let answ = r.question('Your answer: ');

    while (j < firstNumber && j < secondNumber) {
        if (firstNumber % j == 0 && secondNumber % j == 0) {
            currentNod = j;
        }
        j++;
    }
    console.log(`currect nod calculated is ${currentNod}`)
    if (answ == currentNod) {console.log('correct');}
    else {console.log('incorrect'); break;}

    i++;

}
