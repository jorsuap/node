require('dotenv').config();
const {leerInput} = require('./helpers/inquirer');
const { inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busqueda = require('./models/busquedas');

const main = async() => {
    let opt;
    const busqueda = new Busqueda();
    
    do {
        opt  = await inquirerMenu(); // muestra la opciones de menu y retorna la opcion selecionada
        console.log({opt})
    switch (opt) {
        case 1:
            //Mostrar mensaje
            const lugar = await leerInput('Ciudad: ');
            //Buscar lugares
            const lugares = await busqueda.ciudad(lugar);
            // Selecionar lugar
            const id = await listarLugares(lugares);
            const lugarSelect = lugares.find(lugar => lugar.id === id);

            //Clima
            //mostrar resultados
            console.log('\nInformacion de la ciudad\n');
            console.log('Ciudad:', lugarSelect.nombre);
            console.log('Lat:', lugarSelect.lat);
            console.log('Lng:', lugarSelect.lng);
            console.log('Temperatura:', );
            console.log('Minima:', );
            console.log('Maxima:', );
            break;
    
        default:
            break;
    }

    if (opt !== 0) await pausa(); //hace una pausa
   } while (opt !== 0);
};

main();
