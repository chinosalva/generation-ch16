function miFuncion (a, b){
    return (a + b)
}
let resultado = miFuncion(9, 9)
console.log(`El resultado es ${resultado}`)

/* *************** Funcion Expresion o Anonima ************* */ 

let suma = function (){
    return (a + b)
}

let res = suma (2, 3)
console.log(`El resultado es ${res}`)

let resta = function (a, b) {return (a - b)}
res = resta (8, 4)

let multiplicacion = (a, b) => {
    return a * b
}
res = multiplicacion (8, 4)

let cociente = function (a, b) {return a % b}

res = cociente (8, 4)

/* *********** Self Invoking ************* */
(function (a, b) {
    console.log(`El resultado es ${a + b}`)
})(3, 4)