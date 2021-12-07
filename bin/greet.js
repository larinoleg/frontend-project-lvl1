import r from 'readline-sync';

var userName;

const greet = () => {
    let concatName;
    console.log('Welcome to the Brain Games!');
    userName = r.question('May I have your name? ');
    concatName = `Hello, ${userName}, man!`;
    console.log(concatName);
}

const Congratz = () => 
{
    console.log(`Congratz, ${userName}`);   
}

export {greet, Congratz};