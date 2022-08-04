let dinero = 10000
function consulta(dinero){
    let retirar = prompt('Cuanto desea retirar')
    dinero = dinero - retirar
    console.log(`El saldo restante es ${dinero}`)
    console.log(`Tu retiro fue de ${retirar}`)

}

console.log(consulta())