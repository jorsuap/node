const deadpool = {
    name : 'wild',
    apellido : 'suarez',
    poder : 'regeneracion',
    getName(){
        return `${this.name} ${this.apellido}`
    }
}

// const nombre = deadpool.apellido

const {nombre, apellido, poder} = deadpool;

function imprimirHeroe({name, apellido,poder}){
    console.log(name,apellido, poder);
}

imprimirHeroe(deadpool)

const heroes = ['jorddi', 'marcela', 'yenny']

const [h1,h2, h3] = heroes;
console.log(h1,h2,h3)