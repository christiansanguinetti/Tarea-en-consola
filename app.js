const { inquirerMenu,
    pausa,
    leerimput } = require('./helpers/inquirer');
require('colors');
const Tarea = require('./models/Tarea.js');
const { Tareas } = require('./models/Tareas.js');

console.clear();

const main = async () => {
 
    let opt = '';
    const tareas = new Tareas();

    do {

        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerimput('descripcion:');
                console.log(desc)
                break;
            case '2':''
            console.log( tareas._listado);
            break;
        }
        await pausa();

    } while (opt !== '0');

}
main();
