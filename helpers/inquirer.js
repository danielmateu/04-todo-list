

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
                name: '1.Crear tarea'
            },
            {
                value: '2',
                name: '2.Mostrar tareas'
            },
            {
                value: '3',
                name: '3.Mostrar tareas completadas'
            },
            {
                value: '4',
                name: '4.Mostrar tarea pendientes'
            },
            {
                value: '5',
                name: '5.Completar tarea(s) '
            },
            {
                value: '6',
                name: '6.Eliminar tarea'
            },
            {
                value: '0',
                name: '0.Salir'
            },
        ]
    }
]

const inquirerMenu = async () => {
    
    console.log('==========================='.green)
    console.log('   Selecciona una opción'.green)
    console.log('===========================\n'.green)

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

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