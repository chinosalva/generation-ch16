class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    get nombre(){return this.nombre}
    set nombre(nombre){
        this.nombre = nombre
    }
}

let person = new Persona('Erick', 'Salvador')
console.log(person)

person.nombre = 'Hugo Sanchez'
console.log(person)

