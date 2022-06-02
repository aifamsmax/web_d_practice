//print
console.log("hello js");
//declare variable
let a; 
console.log(a);//undefined
a = 10;
console.log(a);
//variable types : primitive types : number, string , boolean null;
//non- primitive types : object, array, function
function sayHi(){
    console.log("hi");
}
sayHi();
//Math.random() to generate random number
//Math.floor() to round down
//Math.ceil() to round up
//Math.round() to round to nearest
//Math.pow() to raise to power
//Math.sqrt() to square root
//Math.abs() to get absolute value
//Math.min() to get minimum value
//Math.max() to get maximum value
//object : key value pair
let person = {
    name : "john",
    age : 30,
    isMarried : false,
    address :{
        street : "abc",
        city : "bangalore"
    }
    ,
    movies : ["abc","xyz"]
    ,sayHi: function(){
        console.log("hi");
    }
}
console.log(person);
console.log(person.name);
console.log(person.movies[1]);
person.sayHi();
//array : ordered collection of items
let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
//function : block of code that can be executed
//function declaration
function add(a,b){
    return a+b;
}
console.log(add(2,3));
//function expression
let sub = function(a,b){
    return a-b;
}
console.log(sub(2,3));
//arrow function
let mul = (a,b) => a*b;
console.log(mul(2,3));
//delete keyword
let person1 = {
    name : "john",
    age : 30,
    isMarried : false
}
console.log(person1);
delete person1.age;
console.log(person1);
//typeof keyword
console.log(typeof person1);
console.log(typeof person1.age);
console.log(typeof person1.isMarried);
console.log(typeof person1.name);
for(let key in person1){
    console.log(key, " : ", person1[key]);
}
//if else
let age = 30;
if(age>=18){
    console.log("you are eligible");
}
else{
    console.log("you are not eligible");
}
//switch case
let grade = "A";
switch(grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Bad");
        break;
    default:
        console.log("Invalid grade");
}
//array declare
let arr1 = [1,2,3,4,5];
console.log(arr1);
//array methods 
//push() : add element at the end
arr1.push(6);
console.log(arr1);
//pop() : remove element from the end
arr1.pop();
console.log(arr1);
//unshift() : add element at the beginning
arr1.unshift(0);
console.log(arr1);
//shift() : remove element from the beginning
arr1.shift();
console.log(arr1);
//splice() : add or remove element from the middle
arr1.splice(2,0,6,7);//index, no of elements to be removed, elements to be added
console.log(arr1);
//slice() : copy array
let arr2 = arr1.slice(2,4);
console.log(arr2);
//concat() : merge two arrays
let arr3 = arr1.concat(arr2);
console.log(arr3);
//sort() : sort array
arr3.sort();
console.log(arr3);
//reverse() : reverse array
arr3.reverse();
console.log(arr3);
//join() : convert array to string
let str = arr3.join("-");
console.log(str);
//split() : convert string to array
let arr4 = str.split("-");
console.log(arr4);
//for loop
for(let i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}
//while loop
let i = 0;
while(i<arr4.length){
    console.log(arr4[i]);
    i++;
}
//do while loop
let j = 0;
do{
    console.log(arr4[j]);
    j++;
}
while(j<arr4.length);
//for in loop
for(let key in arr4){
    console.log(arr4[key]);
}
//for of loop
for(let value of arr4){
    console.log(value);
}
//break and continue
for(let i=0;i<arr4.length;i++){
    if(arr4[i]=="7"){
        break;
    }
    console.log(arr4[i]);
}
for(let i=0;i<arr4.length;i++){
    if(arr4[i]=="7"){
        continue;
    }
    console.log(arr4[i]);
}
