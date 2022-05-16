//Помещаем элементы управления в переменные
let leftButton = document.getElementsByClassName('leftButton')[0];
var rightButton = document.getElementById('rightButton');
const topButton = document.getElementsByTagName('p')[0];
const bottomButton = document.querySelector('.bottomButton');

//Помещаем наш круг в переменную
const square = document.querySelector('.circle');

//Вешаем прослушку на кнопку "влево" через ранее созданную переменную, используя событие типа "click"
//Функцию описываем внутри прослушки
leftButton.addEventListener("click", function() {
    square.classList.remove('right');
})

//Создаём функцию для правой кнопки вне прослушки
function rigthAction() {
    square.classList.add('right');
}

//Вешаем прослушку на кнопку "вправо" используя событие типа "mousedown"
//(событие активируется как только пользователь нажмёт на кнопу и не успеет её отпустить)
//Функция для прослушки описана вне самой прослушки
rightButton.addEventListener('mousedown', rigthAction);

topButton.addEventListener('click', function() {
//Внутри функции используется объект classList и его метод remove
    square.classList.remove('bottom');
})

bottomButton.addEventListener('click', function() {
    square.classList.add('botom');
})

//По возможности сделай код в едином стиле и верни работоспособность всем кнопкам