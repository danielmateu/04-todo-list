require('colors');

const Tarea = require("./tarea");
class Tareas {

    _listado = {};

    get listadoArr() {

        const listado = [];
        /* Iterating over the object and pushing the values into an array. */
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    /**
     * It creates a new object.
     */
    constructor() {
        this._listado = {}
    }

    cargarTareasFromArray(tareas = []) {

        /* Iterating over the array and adding the values to the object. */
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });

    }

    /**
     * The function crearTarea() creates a new task and adds it to the list of tasks.
     * @param [desc] - The description of the task.
     */
    crearTarea(desc = '') {

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;

    }

    listadoCompleto() {
        //1: En verde
        //Completada: verde && Pendiente: rojo

        //1. Alma :: Completada | Pendiente
        //2. Relidad ...
        console.log();
        this.listadoArr.forEach((tarea, i) => {

            const index = i + 1;

            (tarea.completadoEn)
                ? console.log(`${(index + '.').green} ${tarea.desc} :: ${'completada'.green}`)
                : console.log(`${(index + '.').red} ${tarea.desc} :: ${'por completar'.red}`);

        })

    }
}

module.exports = Tareas;