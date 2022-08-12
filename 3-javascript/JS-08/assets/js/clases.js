let tiempo = new Date()
console.log(tiempo)
console.log(Math)
// Tipo Cadena
let cadena = "Esto es una cadena"
let cadenaObj = new String('Esto es una cadena obj')
console.log(cadena)
console.log(cadenaObj)

// Tipo Numerico
let numero = 13
let numeroObj = new Number(8)
console.log(numero)
console.log(numeroObj)

let lista = ['2', '3', '5', '7']
let listaObj = new Array('1', '4', '6', '8', '9')
console.log(lista)
console.log(listaObj)

let objLiteral = {
    nombre: 'Juan',
    edad: 24
}
let objConstructor = new Object()
objConstructor.name = "Erick"
objConstructor.edad = 36
// console.log(objLiteral)
console.log(objConstructor)
objLiteral['nombre']
let llave = 'nombre'
console.log(`Esto es una llave ${objLiteral[llave]}`)