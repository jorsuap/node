const axios = require('axios');

class Busqueda {
    historial = ['Tagucigalpa','Madrid', 'San Jose'];

    constructor(){
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
};

module.exports = Busqueda;