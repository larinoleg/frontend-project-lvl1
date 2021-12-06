import r from 'readline-sync';

let userName;
let concatName;
let answer;

const greet = () => {
    console.log('Welcome to the Brain Games!');
    userName = r.question('May I have your name? ');
    concatName = `Hello, ${userName}, man!`;
    console.log(concatName);
}

export {greet};