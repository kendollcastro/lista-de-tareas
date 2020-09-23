//
// Lista de tareas
//

const formulario = document.getElementById('new-task-form');
let contadorTareas = 0;
const lista = document.getElementById('task-list');
const tareas = [];


formulario.addEventListener('submit', (event)=> {
    event.preventDefault();
    console.log('Formulario enviado!');
    console.log(formulario.elements[0].value);

    //Tenemos que crear nuevos elementos como un li//
    const item = document.createElement('li');
    item.className = 'task-list__item';

    //Cuando agregamos el checkbox// 

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `tarea-${contadorTareas}`);

    const label = document.createElement('label');
    label.setAttribute('for',`tarea-${contadorTareas}`);
    contadorTareas++;
    label.innerHTML = formulario.elements[0].value;

    //Para agregar cada element 
    item.appendChild(checkbox);
    item.appendChild(label);
    lista.appendChild(item);

    //Para registrar el objeto de la tarea
    const miTarea = {
        id: contadorTareas, 
        nombre: formulario.elements[0].value,
        completo: false,
    };
    tareas.push(miTarea);
    console.log(tareas);
    contadorTareas++;


    //Para limpiar el form
    formulario.elements[0].value = '';
})