/* ДЗ 5.2 - Div D&D */

/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом фона и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {

    var style = {
        background: Math.floor((Math.random() * 1000000) + 1),
        top: Math.floor((Math.random() * 500) + 50),
        left: Math.floor((Math.random() * 1000) + 100),
        width: Math.floor((Math.random() * 100) + 20),
        height: Math.floor((Math.random() * 100) + 20)
    };

    var element = document.createElement('div');

    element.classList.add('draggable-div');

    element.setAttribute("style", `background-color: #${style.background}; width: ${style.width}px; 
    height: ${style.width}px; top: ${style.top}px; left: ${style.left}px; cursor: move; position: absolute;`);

    element.setAttribute("draggable", "true");

    console.log(element);

    return element;


}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */


function addListeners(target) {


    target.addEventListener('mousedown', mouseDown, false);
    target.addEventListener('mouseup', mouseUp, false);

    function mouseDown(e){
        window.addEventListener('mousemove', divMove, true);
        console.log('mouseDown');
    }

    function mouseUp(e)
    {
        window.removeEventListener('mousemove', divMove, true);
        console.log('mouseUP');

    }

    function divMove(e){
        e.preventDefault();
        target.style.position = 'absolute';
        target.style.top = e.clientY + 'px';
        target.style.left = e.clientX + 'px';
    }


}


let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    let div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации d&d
    addListeners(div);


    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/

});








export {
    createDiv
};
