
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

const id = 4;

getInfoUsuario = async(id) =>{ // retorna una promesa
    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `El empleado ${empleado.name} tiene un salario de ${salario}`
    } catch (error) {
        throw error // el throw me permite lanzar el error de la funcion
    }
}

getInfoUsuario(id)
    .then(ms => console.log(ms))
    .catch(err => console.log(err))