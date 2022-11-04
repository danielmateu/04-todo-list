require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {
    // console.log('Hola mundo');
    let opt = ''
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;

            case '2':
                console.log(tareas._listado);
                break;

            default:
                break;
        }
        //await pausa() -> Presione ${'ENTER'.green} para continuar`
        await pausa()

    } while (opt !== '0');

    await pausa()
}

main();