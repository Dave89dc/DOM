'use strict'

// console.log(document.body);

// const paperinoTag = document.getElementById('paperino');

// console.log(paperinoTag);

// Tutti i contenuti dei tag html sono anch'essi child, ma si chiamano Child Nodes.
// (i Nodes sono i tag non html)
// I Child Nodes sono (qasi sempre) elementi di testo.

// const mainDiv = document.getElementById('main-div');

// const newP = document.createElement('p');

// const text = document.createTextNode('Attento! Non premere, è pericoloso');

// newP.appendChild(text);

// mainDiv.appendChild(newP);


// ToDo List:


const toDos = ['Studiare JavaScript', 'Esercitarmi su CodeWars', 'Ripetere la scacchiera', 'FizzBuzz Forever'];


function displayList(array) {
    document.getElementById('main-list').innerHTML = '';
    for(let i = 0; i < array.length; i++) {
        const mainList = document.getElementById('main-list');
        const list = document.createElement('li');
        const textList = document.createTextNode(array[i]);
        const doneButton = document.createElement('button');
        const buttonText = document.createTextNode('Done');
        doneButton.appendChild(buttonText);
        doneButton.addEventListener('click', (event) => removeToDo(array[i]));
        list.appendChild(textList);
        list.appendChild(doneButton);
        mainList.appendChild(list);
    };
};

displayList(toDos);


function addButtonPressed() {
    const input = document.getElementById('toDo-Input');
    if(input.value !== '') {
    const newToDo = input.value;
    toDos.push(newToDo);
    displayList(toDos);
    };
    input.value = '';
};


function removeToDo(toDo) {
    const toDoIndex = toDos.indexOf(toDo);
    toDos.splice(toDoIndex, 1);
    displayList(toDos);
};