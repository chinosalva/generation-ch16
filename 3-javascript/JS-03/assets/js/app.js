// Control de flujo
// Condicionales
// if
let condicion = false
if (condicon === 10){
    // Codigo que se hace si se cumple la condicon A
    console.log('Entro en la condicion A')
}else if (condicion === 'Hola'){
    // Codigo que se hace si se cumple la condicion B
    console.log('Entro en la condicion B')
}else if (condicion === false){
    console.log('Entro en la condicion C')
}else {
    // Codigo que se hace si no se cumple ninguna de las condiciones anteriores
    console.log('Ninguna de las condicones se cumplieron')
}

function dividir (a, b){
    if (b === 0){
        console.log('No se puede realizar la operacion')
    }else {
        console.log( a / b)
    }
}
dividri(10, 3)

// Switch
let nuevaCondicion = 1
switch (nuevaCondicion){
    case 1:
        console.log('Buenos dias')
        console.log('Espero que te encuentres bien')
        break
    case 'Adios':
        console.log('Nos vemos')
        break
    case true:
        console.log('Te mando un saludo')
        break  
    default: //Por Defecto
        console.log('No entendi tu mensaje')    
}

