console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) (
        continue;
     ) else {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    } else (i % 5 == 0) {
        console.log("BUZZ");
    }

//Exercise 3: While

let x = 1;

while (x <= 100) {
    let output = "";

    if (i % 3 ==0) {
        output += "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    i++;
 }

//Exercise 3: Do While

let x = 1;

do{
    let output = "";

    if (x % 3 == 0) {
        output += "FIZZ";
    }

    if (x % 5 == 0) [
        output += "BUZZ";
    ]

    console.log(`${x} ${output}`);

    x++;
} while (x <= 100);

//Exercise 4

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for (let i =1; i <= n; I++) {
    if (i == numberToFind) {
        console.log(`Found ${numberToFind}!`);
        break;
    }
}

console.log(`Did not find ${numberToFind}.`);

//Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 -1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 -1) + 1);
let end = Math.round(Math.random() * (1000 -1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(start, end);

for (let i = start; i <= end; I++) {
    let output = "";

    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);