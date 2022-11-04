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

    /**
     * The function crearTarea() creates a new task and adds it to the list of tasks.
     * @param [desc] - The description of the task.
     */
    crearTarea(desc = '') {

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;

    }
}

module.exports = Tareas;