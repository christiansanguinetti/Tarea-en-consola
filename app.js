const { inquirerMenu, pausa } = require('./helpers/inquirer');
require('colors');
const {Tarea} = require('./models/Tarea.js');
const {Tareas} = require('./models/Tareas.js');

console.clear();

const main = async () => {

    let opt = '';

    do {
        //opt = await inquirerMenu();
       // console.log( opt );
        
     const tarea = new Tarea (" Comprar Comida ");
     console.log(tarea);


        await pausa();

    } while (opt !== '0');

}
main();
