//Hello World
console.log('Hello World');
console.log('This is a simple Node.js application.');
//Dom Manipulation
document.getElementById('name').innerText = 'Hello'
document.getElementById('changeTextBtn').onclick = function () {
    document.getElementById('name').innerText = 'Button Clicked';
    document.getElementById('name').style.backgroundColor = 'red';
}
document.getElementById('changeTextBtn').ondblclick = function () {
    document.getElementById('name').innerText = 'Button Clicked Twice';
    document.getElementById('name').style.backgroundColor = 'white';
};
//Variables
let count=0;
document.getElementById('count').innerText = count;
document.getElementById('countBtn').onclick = function () {
    count++;
    document.getElementById('count').innerText = count;
}
document.getElementById('countBtnDec').onclick = function () {
    count--;
    document.getElementById('count').innerText = count;
}
document.getElementById('reset').onclick = function () {
    count = 0;
    document.getElementById('count').innerText = count;
}
//Let and Const
console.log(typeof(count));
const PI = 3.14;
console.log(PI);
let x = "a";
console.log(typeof x);
//Objects
let user = {
    name:"John",
    age:22,
    city:"San Francisco"
}
console.log(user)
//Arrays
let fruits = ['Apple','Orange','Banana']
console.log(fruits);
//Push-add to last elements
fruits.push('Guava');
console.log("Push:"+fruits,fruits.length);
//Pop- removes the last Element
fruits.pop();
console.log(fruits,fruits.length);
//Shift removes first Element
fruits.shift();
console.log(fruits,fruits.length);
//unshift - add element to the begining
fruits.unshift('apple');
console.log(fruits,fruits.length);
//Slice() 
console.log(fruits.slice(0,2))
//Splice
console.log(fruits)
let newFriuts = fruits.splice(0,2,"Cherry")
console.log(newFriuts)
console.log(fruits)