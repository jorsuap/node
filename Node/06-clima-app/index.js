require('dotenv').config();
const {leerInput} = require('./helpers/inquirer');
const { inquirerMenu, pausa, listarLugares} = require('./helpers/inquirer');
const Busqueda = require('./models/busquedas');

const main = async() => {
    let opt;
    const busqueda = new Busqueda();
    
    do {
        opt  = await inquirerMenu(); // muestra la opciones de menu y retorna la opcion selecionada
    switch (opt) {
        case 1:
            //Mostrar mensaje
            const lugar = await leerInput('Ciudad: ');
            //Buscar lugares
            const lugares = await busqueda.ciudad(lugar);
            // Selecionar lugar
            const id = await listarLugares(lugares);
            if(id === 0) continue;

            const lugarSelect = lugares.find(lugar => lugar.id === id);
            
            //guardar en DB
            busqueda.saveHIstorial(lugarSelect.nombre);

            //Clima
            const clima = await busqueda.climaCiudad(lugarSelect.lat, lugarSelect.lng);
            //mostrar resultados
            console.log('\nInformacion de la ciudad\n');
            console.log('Ciudad:', lugarSelect.nombre.green);
            console.log('Lat:', lugarSelect.lat);
            console.log('Lng:', lugarSelect.lng);
            console.log('Temperatura:', clima.temp);
            console.log('Minima:', clima.tempMin);
            console.log('Maxima:', clima.tempMax);
            console.log('Clima:', clima.desc.green);
            break;
        case 2:
            busqueda.historialCapital.forEach((ciudad, i) => {
                const idx = `${i + 1}.`.green;
                console.log(`${idx} ${ciudad}`)
            });
            break;
    }

    if (opt !== 0) await pausa(); //hace una pausa
   } while (opt !== 0);
};

main();
