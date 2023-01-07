const { crearArchivo } = require('./helpers/multiplicar') ;
const argv  = require('./config/yargs')


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(name => console.log(name, 'Creado'))
    .catch(err => console.log(err))