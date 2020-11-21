// This file serves as a practice for Javascript functions
// author: Ciucur Daniel
// date: 19/11/2020


// Create some variables in javascript

var name = "Ciucur";
var surname = "Ciucur";


// Create a simple javascript function

function compareNames(personName1, personName2){
    return personName2 == personName1;
}

// check the result of the function 

console.log(compareNames(name, surname)); // ---> true


// Function expressions
//-----------------------------------------------------------------------------------

// Function declarations load before any code is executed 
// while Function expressions load only when the interpreter reaches that line of code.

// There are some different ways in which function expression can become more usefull than function declarations
// -they can be passed as function arguments
// -closures
// -they can be used as Immediately Invoked Function Expressions (IIFE)

var 