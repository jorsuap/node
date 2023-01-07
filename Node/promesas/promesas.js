
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

const id = 3   ;
getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
      const employ = empleado.find(employ => employ.id == id);
      (employ)
        ?resolve (employ)
        :reject (`Empleado con ${id} no Existe`)
      
  })
};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
      const emplo = salarios.find(empl => empl.id === id)?.sueldo;
      (emplo)
        ?resolve (emplo)
        :reject (`El empleado con id: ${id} No tiene salario`)
    })
};  

let name='';

getEmpleado(id)
    .then(empleado => {
        name = empleado.nombre
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado: ${name} tiene el saldio de: ${salario}`))
    .catch(err => console.log(err));


