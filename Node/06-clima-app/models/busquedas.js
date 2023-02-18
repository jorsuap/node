const fs = require('fs');
const axios = require('axios');

class Busqueda {
    historial = ['Tagucigalpa','Madrid', 'San Jose'];
    dbpath = './db/database.json';

    constructor(){
        this.LeerDB();
        //Todo: Leer DB si existe
    }
    get paramsMapbox(){
        return{
            'access_token':process.env.MAPBOX_KEY,
            'proximity':'ip',
            'language':'es',
            'limit':5
        }
    }

    get paramsOpenWeather(){
        return{
            'appid':process.env.OPENWEATHER_KEY,
            'units':'metric'
        }
    }
    get historialCapital (){
        return this.historial.map(lugar =>{
            let palabras = lugar.split(' ');
            palabras = palabras.map(p => p[0].toUpperCase() + p.substring(1));
                return palabras.join(' ')
        })
    }

    async ciudad (lugar=''){

        //peticion HTTP
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });
            const resp = await instance.get();//Request
    
            return resp.data.features.map(lugar =>({
                    id:lugar.id,
                    nombre:lugar.place_name,
                    lng:lugar.center[0],
                    lat:lugar.center[1],
                })
            )
        } catch (error) {
            return []; //Retornar lugares
        }
        
    }

    async climaCiudad(lat, lon){
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params:{... this.paramsOpenWeather, lat, lon}
            });

            const resp = await instance.get();//Request
            const { weather, main} = resp.data;

            return {
                    desc:weather[0].description,
                    tempMin:main.temp_min,
                    tempMax:main.temp_max,
                    temp:main.temp
                }
        } catch (error) {
            console.log(error)
        }
    }

    async saveHIstorial(lugar = ''){
        if(this.historial.includes(lugar.toLocaleLowerCase())){
            return;
        };
        this.historial = this.historial.splice(0,5)
        this.historial.unshift(lugar.toLocaleLowerCase());
        this.guardarDB()
    }

    guardarDB(){
        const payload = {
            historial: this.historial
        };

        fs.writeFileSync(this.dbpath, JSON.stringify(payload));
    }

    LeerDB(){
        if (!fs.existsSync(this.dbpath)){
            return;
        }
        const info = fs.readFileSync(this.dbpath, {encoding:'utf-8'});
        const data = JSON.parse(info);
        this.historial = data.historial;
    }

};



module.exports = Busqueda;
