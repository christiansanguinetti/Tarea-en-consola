const inquirer = require('inquirer');
require('colors');

const menuOpts = [{

    type: 'list',
    name: 'opcion',
    message: 'Que desea hacer?',
    choices: [
        {
            value: "1",
            name: "1. Crear Tarea"
        },
        {
            value: "2",
            name: "2. Listar Tarea"
        },
        {
            value: "3",
            name: "3. Listar Tarea Completada"
        },
        {
            value: "4",
            name: "4. Listar Tareas Pendientes"
        },
        {
            value: "5",
            name: "5. Completar Tarea(s) "
        },
        {
            value: "6",
            name: "6. Borrar tarea"
        },
        {
            value: "0",
            name: "0. Salir"
        }
    ]
}]


const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(menuOpts);
    return { opcion };
}
const pausa = async () => {
    const question = [
        {
            type:

                "input",
            name: "enter",
            message: `Presione ${'enter'.green} para continuar`
        }
    ]


    await inquirer.prompt(question)
}

const leerimput = async (menssage) => {
    const question = [
        {
            type: "imput",
            name: "desc",
            menssage,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor Ingrese un valor';
                }
                return true
            }
        }



    ];
    const {desc} = await inquirer.prompt(question)
    return desc



}



module.exports = {
    inquirerMenu,
    pausa,
    leerimput
}