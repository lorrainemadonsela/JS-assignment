//Write a JavaScript function that takes an array of strings and returns a new array with the length of each string.

function arrayOfStrings(array){
    return array.map(String => String.length);
}
const array = ["Nene", "Sphe", "Maisha", "Jordyn"];
const stringsLength = arrayOfStrings(array);
console.log(stringsLength);
//Given an array of numbers, write a function that filters out and returns only the even numbers.

function filtering(numbers){
    return numbers.filter(number => number % 2 ===0);
    
}
const numbers = [4,8,3,64,12,36,79];
const filteredNumbers = filtering(numbers);
console.log(filteredNumbers);


//Create a function that takes an array of student objects with name and score properties and returns a new array containing only the names of students who scored above 75

function scores(students){
    const pupils = students.filter(students => students.score> 75).map(students => students.name);
    return pupils
}
const students = [{name: "Nene", score:34}, {name: "Sphe", score:98}, {name: "Maisha", score:83}, {name: "Jordyn", score:100}, {name: "Jordan", score:75}, {name: "Nike", score:77}, {name: "Fila", score:59}];
const result = scores(students);
console.log(result);


//Write a function that accepts an array of numbers and returns a new array with each number squared using the map() method.

function squaredNumbers(nums){
    return nums.map(nums => nums**2);
}
const nums = [5,7,4,9,2];
const squared = squaredNumbers(nums);
console.log(squared);

//Write a JavaScript function that takes an array of mixed data types and returns a new array containing only the string elements, all converted to uppercase.

function array(stringArray){
    
}