#!/usr/bin/env node
import r from 'readline-sync';
import { greet } from './greet.js';


let k = 0;
let exprsn;
let correctAnswer;
let i = 0;
let arr = ['+', '-', '*'];

greet();

while (i < 3) { 
    let firstNumber = Math.floor(Math.random()*10);
    let secondNumber = Math.floor(Math.random()*10);
    let randIndex = Math.floor(Math.random()*3)
    exprsn = firstNumber.toString() + ' ' + arr[randIndex] + ' ' +
    secondNumber.toString();
    
    if (randIndex === 0) 
    { 
       correctAnswer = firstNumber + secondNumber; 
     }
    else if (randIndex === 1) { 
        correctAnswer = firstNumber - secondNumber;
     }
    else if (randIndex === 2) { 
        correctAnswer = firstNumber * secondNumber;
     }



    console.log('What is the result of expression?');
    console.log(`Questions ${exprsn}`);
    let userAnswer = r.question('Your answer: ');
    if (userAnswer === correctAnswer) { 
        console.log('correct');
     }
    else { 
        console.log('no, no..')
        break;
     }    
    i++;

 }
