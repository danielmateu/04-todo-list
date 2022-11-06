require('colors');

const { guardarDB, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
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
            case '1':
                /* Asking the user to input a description. */
                const desc = await leerInput('Descripción: ');
                /* Creating a new task. */
                tareas.crearTarea(desc);
                break;

            case '2':
                // console.log(tareas.listadoArr);
                tareas.listadoCompleto();
                break;

            case '3':
                tareas.tareasCompletadasPendientes(true)
                break;

            case '4':
                tareas.tareasCompletadasPendientes(false);
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