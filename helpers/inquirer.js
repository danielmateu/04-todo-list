

const inquirer = require('inquirer');

require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desas realizar?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Mostrar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Mostrar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Mostrar tarea pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s) `
            },
            {
                value: '6',
                name: `${'6.'.green} Eliminar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
]

const inquirerMenu = async () => {
    
    console.log('==========================='.green)
    console.log('   Selecciona una opción'.white)
    console.log('===========================\n'.green)

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

/**
 * It waits for the user to press enter before continuing.
 */
const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

/**
 * It's a function that returns a promise that resolves to the value of the input field.
 * @param message - The message that will be displayed to the user.
 * @returns The value of the input.
 */
const leerInput = async (message) => {

    const question = [
        {
            type:'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Ingresa un valor'
                }
                return true;
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);
    return desc
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}