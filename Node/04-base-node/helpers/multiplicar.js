const Color = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 1, print = false, limit) => {
    try {
        let out = '';
        let consola = '';
        for (let i = 1; i <= limit; i++) {
            consola += `${base} x ${i} = ${base*i}\n` // se crea uno variable sin colores para guardar el archivo sino crea errores
            out += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`
        };
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola, (err)=>{
            if(err) throw err
            console.log(`tabla-${base}.txt Creado Exitosamente`)
        })
        if(print){
            console.log('================'.blue);
            console.log('   Tabla del:'.green, Color.blue(base));
            console.log('================'.blue);
            console.log(out)
        }
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}