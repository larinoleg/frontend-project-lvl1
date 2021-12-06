#!/usr/bin/env node
import r from 'readline-sync';

let userName;
let concatName;
let answer;
let ans;
let k = 0;

console.log('Welcome to the Brain Games!');
userName = r.question('May I have your name? ');
concatName = `Hello, ${userName}, man!`;
console.log(concatName);
console.log('Answer yes if the name is even, otherwise answer no');

const a = () => {
   
   while (k < 3) {
    ans = Math.floor(Math.random()*10);
    console.log(`Question: ${ans}`);
    answer = r.question('Your answer: ');
    if (answer == 'no' && ans%2 != 0 || answer == 'yes' && ans%2 == 0) {
        console.log('correct!')
    }
    else {
        if (answer == 'no') {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${userName}`);
        }

        else {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName}`);
        }
        break;
        
    }    
    k++;
   }
   if (k==3) {console.log(`Congratulations, ${userName}`)};
    
};

a();

