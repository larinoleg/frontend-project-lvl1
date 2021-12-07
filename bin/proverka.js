let chislo = 10;
let j = 2; let i = 0;
while (j < 9) {
    if (chislo % j == 0 && j != chislo) {i++; console.log(j); console.log(i);}
    j++;
}

console.log(i);