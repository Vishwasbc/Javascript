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
    count = count + 1;
    document.getElementById('count').innerText = count;
}
document.getElementById('countBtnDec').onclick = function () {
    count = count - 1;
    document.getElementById('count').innerText = count;
}
document.getElementById('reset').onclick = function () {
    count = 0;
    document.getElementById('count').innerText = count;
}