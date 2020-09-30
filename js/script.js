//
// Lista de tareas
//


//Modelo
//Lista de tareas

const tareas = JSON.parse(localStorage.getItem('tareas'));
let contadorTareas = 0;
console.log(tareas);
function addTask(nombreTarea, fechaTarea, completoTarea){
    //Para registrar el objeto de la tarea
    const miTarea = {
        id: contadorTareas, 
        nombre: nombreTarea,
        completo: completoTarea,
    };
    tareas.push(miTarea);
    console.log(tareas);
    contadorTareas++;
   
    localStorage.setItem('tareas', JSON.stringify(tareas));


    appendTaskDOM(miTarea);

}

//La vista 

//Lista del DOM
const lista = document.getElementById('task-list');

function appendTaskDOM(tarea){

    //Tenemos que crear nuevos elementos como un li//
    const item = document.createElement('li');
    item.className = 'task-list__item';

    //Cuando agregamos el checkbox// 

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `tarea-${tarea.id}`);

    //Label
    const label = document.createElement('label');
    label.setAttribute('for',`tarea-${tarea.id}`);
    contadorTareas++;
    label.innerHTML = `${tarea.nombre}`
    //label.innerHTML = formulario.elements[0].value;

    //Para agregar cada element 
    item.appendChild(checkbox);
    item.appendChild(label);
    lista.appendChild(item);
}

for( let i = 0; i < tareas.length; i++){
    appendTaskDOM(tareas[i]);
}

//Controlador.

const formulario = document.getElementById('new-task-form');


formulario.addEventListener('submit', (event)=> {
    event.preventDefault();
    console.log('Formulario enviado!');
    console.log(formulario.elements[0].value);


    addTask(formulario.elements[0].value, formulario.elements[1].false);


    //Para limpiar el form
    formulario.elements[0].value = '';

})