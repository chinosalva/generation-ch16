// Tipos de datos
// Tipos de variables
let a = 20
const b = 0
var c 
const PI = 3.1416

// String
let cadena = 'Hola Mundo!'
// Number
let numero = 5
let numero2 = 5.89
let numero3 = -5.89
// Scope - contexto
// espacio en el que vive la variable
if (true) {
    let ambito = "Esta es mi casa"
}else {
    ambito = "El patio"
}
let fuera = "Aqui ya no es mi casa"

// BooLean
let booleano = true
let booleano2 = false

// undefined
let variable
// console.log(variable)

// null
let vacio = null

// NaN
// No es numero
// tratar de realizar alguna operacion aritmetica con algun dato que no es un numero

// Plantillas literales
// template straings
// literal strings 
console.log(`Esta es una cadena ${5 + 4}`)
console.log("Esta es una cadena normal")
let nombre = "chino"
// let presentacion
console.log("mi nombre es " + nombre)
console.log(`Yo me llamo ${nombre}`)

// Arreglos - Matrices -Arrays
let arr = [1, "a null", undefined, [true, false]]
console.log(arr[4][0])
let arr2 = new Array("b", 2)
console.log(arr2)

// Objetos
// clave / valor

const obj = {
    nombre: 'Chino',
    edad: 24,
    hobbies: [
        "leer",
        "Marvel",
        "comer"
    ],
    auto: {
        marca: "vw",
        modelo: "Pointer",
    },
    saludar: function (){
        return "Saludar"
    }
}

persona.nombre = "Panchito"

console.log(`Mi nonbre es ${persona.nombre}`)