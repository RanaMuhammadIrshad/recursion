"use strict";
/* 
# 1- Recursion

#### Calculate the sum of natural number up to n
* Write a JavaScript program to compute the sum of an array of integers


```javascript
    const array = [1, 2, 3, 4, 5, 6]
    sum(array)  // return 21
```
 */

console.log(`*******01*******`);
const array = [1, 2, 3, 4, 5, 6];

const sumOfArrNum = (array) =>
  array.length === 0 ? 0 : array[0] + sumOfArrNum(array.slice(1));

const returnedSum = sumOfArrNum(array);
console.log(returnedSum);

/* 
# 2- Recursion

#### Calculate factorial of n. Reminder n! = 1 * 2 * ... * n
* Write a JavaScript program to calculate the factorial of a number.

* In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120


```javascript
    factorial(5)  // return 120
``` */
console.log(`*******02*******`);
function factorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

let returnedFactorial = factorial(5);
console.log(returnedFactorial);

/* 
# 3- Recursion

#### Write a function which can reverse string
* Write a JavaScript function that reverse a string.
Sample Data and output:
Example reverse("hello world")
Expected Output: dlrow olleh


```javascript
    const string="hello world"
    reverse(string)  // return dlrow olleh
```
 */
console.log(`*******03*******`);
const reverse = function (str) {
  return str ? reverse(str.substr(1)) + str[0] : str;
};

const reversedString = reverse("Hello World");
console.log(reversedString);
