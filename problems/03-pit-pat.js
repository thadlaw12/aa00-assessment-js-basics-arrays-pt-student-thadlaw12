/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/03-pit-pat-spec.js
*/

// Define a function called pitPat that takes in a minimum number and a maximum
// number as two parameters. Return an array containing all the numbers between
// the minimum and maximum numbers (inclusive) that are divisible by 4 or 6, but
// not by both.

function pitPat(min, max){
    let arr = [];
    for(let i = min; i <= max; i++){
        if(min === max){
            arr.push()
        }
        if(i % 4 === 0 && i % 6 === 0){
            arr.push()
        }else if(i % 4 === 0){
            arr.push(i);
        }else if(i % 6 === 0){
            arr.push(i)
        }
    } return arr;
}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pitPat;
