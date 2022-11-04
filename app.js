require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {
    console.log('Hola mundo');

    let opt = ''

    do {
        opt = await inquirerMenu();
        console.log({opt});

        //await pausa() -> Presione ${'ENTER'.green} para continuar`

    
    } while (opt !== '0');

    await pausa()
}

main();