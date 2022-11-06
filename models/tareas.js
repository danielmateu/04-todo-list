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

    tareasCompletadasPendientes(completadas = true){
        console.log();

        let contador = 0;
        this.listadoArr.forEach( tarea => {
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            
            if(completadas){
                //Mostrar completadas
                if(completadoEn){
                    contador ++;
                    console.log(`${(contador +'.').green} ${desc} :: ${(completadoEn).green}`);
                }
            }else{
                //Mostrar Pendientes
                if(!completadoEn){
                    contador ++;
                    console.log(`${(contador +'.').red} ${desc} :: ${estado}`);
                }

            }
        })
    }

    toggleCompletadas( ids = []){
        
        ids.forEach(id => {

            const tarea = this._listado[id];
            if( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString();
            }
        })

        this.listadoArr.forEach(tarea => {

            if(!ids.includes(tarea.id)){
                // const tarea = this._listado[id];
                this._listado[tarea.id].completadoEn = null;
                // tarea.completadoEn = null
            }
        })

    }

    eliminarTarea(id = ''){
        // console.log('eliminarTarea');

        if(this._listado[id]){
            delete this._listado[id];
        }
    }

}

module.exports = Tareas;