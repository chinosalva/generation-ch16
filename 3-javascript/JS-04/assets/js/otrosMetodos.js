// const arr = ["X", "A", "H", "a", "W", "b"];
// arr.sort()
// console.log(arr)
// const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
// arr2.sort()
// console.log(arr2)

// function sumar (a, b){
//     return (a + b)
// }


// let a = 2
// console.log(a)

// const multiplicar = function (a, b){
//     return (a * b)
// }
// console.log(multiplicar(4, 7))

// Funciones flecha
// const dividir = (a, b) => {
//     return (a / b)
// }

const arrNumeros = [1, 2, 3, 4, 5]
for (let i = 0; i < arrNumeros; i++){
    arrNumeros[i] = arrNumeros[i] * 2
}

arrNumeros.forEach((elemento) => console.log(elemento) )