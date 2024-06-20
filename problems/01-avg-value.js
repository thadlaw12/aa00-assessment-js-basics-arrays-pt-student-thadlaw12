/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/01-avg-value-spec.js
*/

// Define a function called avgValue that takes in an array of numbers. Return
// the average number value of all the numbers in the array.

function avgValue(arr){
    let count = 0;
    if(arr.length === 0){
        return 0;
    }
    for(let i = 0; i < arr.length; i++){
        count += arr[i]
    } return count / arr.length;
}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgValue;
