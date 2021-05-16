// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called 'name' and assign the value to 'Dane' as a string
// We check if the variable name is exaxtly equal to the string 'Mary',
// If true (variable is exactly equal to 'Mary') it will console.log('Hi, Mary!'), but since it evaluates to false, we run the else statement
//Since 'Dane' is defintely not exactly equal to 'Mary', we console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable named 'secret' with no assigned value
// We declare a variable 'code' and assign it the value 123 as a number
// We check to see if the code is exactly equal to the number 123
//123 is equal to 123 so the variable secret is assigned the string value 'super' and code is assigned the value of code multiplied by 2
//code is now equal to 246
//We check to see if code is greater than 250, since 246 is less than 250 it doesn't reassign the value of secret
//We console log the value of secret which is 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create the variable called 'isStudent' and assign it the value true
// We create the variable called 'age' and assign it the value of 34 as a number
// We create the variable 'zip' and assign it the value of the number 55407
//We check to see if isStudent is exactly true and also if the zip is greater than 80000
//isStudent is true but zip is less than 8000 so we evaluate the else if statement
//We check to see if isStudent is exactly equal to fale or age is less than 30
// isStudent does not equal 'false' so it runs the next else if statement
//We check to see if the variable 'isStudent' is exactly equal to true and it is
//We console log 'Welcome to Prime'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - colorOne is set to 'red' and should be set to 'blue' , should be colorOne ='blue';
//colorTwo is set to 'blue' and should be set to 'red', should be colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
//FIX only colorOne is set equal to 'purple' but we want to set colorOne and colorTwo equal to 'purple'
//Should be colorOne = colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//FIX || is used in an 'or' not the 'and' expression
//Should be '(temp > 39 && time >=4)'
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//FIX <= checks if it is LESS than or equal to so it's checking if minAge is less than or equal to age
//Should be if(age >= minAge)
if(minAge <= age) {
//FIX This console.log should be 'enter' because that is what evaluates when it is true
//Should be console.log('enter');
  console.log('no entry');
} else {
//This seems to be flipped with the previous one so it should read console.log('no entry'); (or some other value that isn't the 'true' value)
  console.log('enter');
}
*/
