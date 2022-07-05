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

console.log(`*******01-Method-01*******`);
const array = [1, 2, 3, 4, 5, 6];

const sumOfArrNum = (array) =>
  array.length === 0 ? 0 : array[0] + sumOfArrNum(array.slice(1));

const returnedSum = sumOfArrNum(array);
console.log(returnedSum);

console.log(`*******01-Method-02*******`);
const sum = function (arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr.pop() + sum(arr);
};
let result = sum(array);
console.log(result);

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
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

let returnedFactorial = factorial(3);
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
console.log(`*******03-Method-01*******`);
const reverse = function (str) {
  return str ? reverse(str.substr(1)) + str[0] : str;
};

const reversedString = reverse("Hello World");
console.log(reversedString);

console.log(`*******03-Method-02*******`);
const reverseString = function (str) {
  if (str === "") {
    return "";
  }

  return reverseString(str.substr(1)) + str.charAt(0);
};

const retString = reverseString("hello world");
console.log(retString);
