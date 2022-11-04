

require('colors');

const mostrarMenu = () => {

    console.clear();
    console.log('==========================='.green)
    console.log('   Selecciona una opción'.green)
    console.log('===========================\n'.green)

    console.log(`1. Crear tarea`)
    console.log(`2. Listar tarea`)
    console.log(`3. Listar tareas completadas`)
    console.log(`4. Listar tarea pendientes`)
    console.log(`5. Completar tarea(s) `)
    console.log(`6. Eliminar tarea`)
    console.log(`0. Salir \n`)
    
    
}

module.exports = {
    mostrarMenu,
} 
    