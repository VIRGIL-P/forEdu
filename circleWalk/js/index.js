let leftButton = document.querySelector('.leftButton');
let rightButton = document.querySelector('.rightButton');
let topButton = document.querySelector('.topButton');
let bottomButton = document.querySelector('.bottomButton')

const square = document.querySelector('.circle');

leftButton.addEventListener("click", function() {
    square.classList.remove('right');
})

topButton.addEventListener("click", function() {
    square.classList.remove('bottom');
})

function rightAction() {
    square.classList.add('right');
}
rightButton.addEventListener('mousedown', rightAction);

function bottomAction() {
    square.classList.add('bottom');
}
bottomButton.addEventListener('mousedown', bottomAction);

