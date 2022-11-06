require('colors');

const { guardarDB, leerDb } = require('./helpers/guardarArchivo');
const { 
    inquirerMenu, 
    pausa, 
    leerInput, 
    listadoTareasParaBorrar, 
    confirmar, 
    mostrarListadoChecklist } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');



// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {
    // console.log('Hola mundo');
    let opt = ''
    const tareas = new Tareas();

    const tareasDb = leerDb();

    if(tareasDb){  //cargar tareas
        //Establecer las tareas
        //Cargar tareas
        tareas.cargarTareasFromArray(tareasDb);
    }

    // await pausa();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1': //Crear tareas
                /* Asking the user to input a description. */
                const desc = await leerInput('Descripción: ');
                /* Creating a new task. */
                tareas.crearTarea(desc);
                break;

            case '2': //mostrar listado
                // console.log(tareas.listadoArr);
                tareas.listadoCompleto();
                break;

            case '3': // completado 
                tareas.tareasCompletadasPendientes(true)
                break;

            case '4': // pendiente
                tareas.tareasCompletadasPendientes(false);
                break;

            case '5': // completado || pendiente
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;

            case '6': //Borrar
                const id = await listadoTareasParaBorrar( tareas.listadoArr);
                if(id !== '0'){
                    //TODO preguntar si estamos seguros
                    const ok = await confirmar('Está seguro');
                    
                    if(ok){
                        tareas.eliminarTarea(id)
                        console.log('\nTarea eliminada');
                    }               
                }

                break;

            default:
                break;
        }

        guardarDB( tareas.listadoArr );
        //await pausa() -> Presione ${'ENTER'.green} para continuar`
        await pausa()

    } while (opt !== '0');

    await pausa()
}

main();