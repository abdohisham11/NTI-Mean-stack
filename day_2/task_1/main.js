// 1. Create an array of 10 numbers
let numbers = [5, -3, 12, -7, 9, 0, -2, 8, 15, -6];

let sumPositive = 0;
let sumAll = 0;

// 2. Use a for loop to calculate sums
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    sumAll += num; // add to total sum

    if (num < 0) {
        continue; // skip negatives
    }
    sumPositive += num; // add only positives
}

// 4. Display results
console.log("Sum of positive numbers:", sumPositive);
console.log("Sum of all numbers:", sumAll);

// 5. Modify array: add a new number at the end, remove the first element
numbers.push(20);  
numbers.shift();   

console.log("Modified array:", numbers);