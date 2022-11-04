

require('colors');

const mostrarMenu = () => {

    console.clear();
    console.log('==========================='.green)
    console.log('   Selecciona una opción'.green)
    console.log('===========================\n'.green)

    console.log(`${'1.'.green} Crear tarea`)
    console.log(`${'2.'.green} Listar tarea`)
    console.log(`${'3.'.green} Listar tareas completadas`)
    console.log(`${'4.'.green} Listar tarea pendientes`)
    console.log(`${'5.'.green} Completar tarea(s) `)
    console.log(`${'6.'.green} Eliminar tarea`)
    console.log(`${'0.'.green} Salir \n`)
    
    

}

module.exports = {
    mostrarMenu,
} 
    