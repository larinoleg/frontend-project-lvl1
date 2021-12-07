#!/usr/bin/env node
import r from 'readline-sync';
import {greet, Congratz} from './greet.js';

let k = 0;
let i = 0;
let j = 0;
let missNumber;

greet();

while (k < 3) {
    const missProgression = [];
    const missIndex;
    const progressionStep = Math.floor(Math.random() * 4 + 1);
    let progression = [];
    progression.push(Math.floor(Math.random() * 12));

    while (i < 5) {
        progression.push(progression[i] + progressionStep);
        i++;
    }

    missIndex = Math.floor(Math.random() * (progression.length-1));

    while (j < 5) {
        if (j!=missIndex) {
            missProgression.push(progression[j]);
        }
        else {
            missIndex = j-1;
            missProgression.push('-');
            missNumber = progression[j];
        }
        j++;
    }

    console.log(missProgression);

    console.log('What number is missing from progression');
    let question = r.question(`Qestion: ${missProgression}: `);
    console.log(progression[missIndex] + progressionStep);
    if (missNumber == question) {
        console.log('YOU RIGHT!!!');
    }
    else {
        console.log('YOU WRONG');
        break;
    }
    k++;
    i = 0; j = 0;
    if (k == 3) {
       Congratz();
    }
}
