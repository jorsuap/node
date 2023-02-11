const {leerInput} = require('./helpers/inquirer');

const main = async() => {
    const text = await leerInput ('hola');
    console.log(text)
};

main();
