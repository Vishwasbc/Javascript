console.log('Hello World');
console.log('This is a simple Node.js application.');

document.getElementById('name').innerText = 'Hello'
document.getElementById('changeTextBtn').onclick = function () {
    document.getElementById('name').innerText = 'Button Clicked';
    document.getElementById('name').style.backgroundColor = 'red';
}
document.getElementById('changeTextBtn').ondblclick = function () {
    document.getElementById('name').innerText = 'Button Clicked Twice';
    document.getElementById('name').style.backgroundColor = 'white';
};