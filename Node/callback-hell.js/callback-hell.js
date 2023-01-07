
const empleado = [
    {
        id:1,
        nombre: 'Fernando'
    },
    {
        id:2,
        nombre: 'Lucas'
    },
    {
        id:3,
        nombre: 'Linda'
    },
    
]

const salarios = [
    {
        id:1,
        sueldo:1000
    },
    {
        id:2,
        sueldo:1500
    }
];

const getSalario = (id,  callback) => {
    const empleado = salarios.find(employ=>employ.id === id);
    empleado?callback(null, empleado):callback(`El empleado con ${id} No tiene Salario`)
}
const id = 2;
getEmpleado = (id, callback) => {
    const employ = empleado.find(employ => employ.id == id);
    employ? callback(null, employ) : callback(`Ups!, el empleado con id ${id} no existe`)
};

getEmpleado(id, (err, empleado)=>{
    
    if(err) return console.log(err);
    
    getSalario(id, (err,salario)=>{
        if (err) return console.log(err)
        console.log(`El empleado ${empleado.nombre} tiene un salario de: ${salario.sueldo}`)

    })
})

