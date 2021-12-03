import r from "readline-sync"

const a = () => {
    console.log("Welcome to the Brain Games!");
    var userName = r.question('May I have your name? ');
    console.log('Hello,' + userName + '!');
}

export { a }

