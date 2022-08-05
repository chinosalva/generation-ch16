let cantidadVentas = prompt('Cuantas ventas totales generaste')
let payaso = 112
let muñeca = 75
let limit = 1
let cuantosPayasos = parseInt(prompt('Cuantos payasos vendiste'))
let cuantasMuñecas = parseInt(prompt('Cuantas muñecas vendiste')) 
let calculo = () => {
    alert(`El numero de ventas totales que generaste fue ${cantidadVentas} `)
    let totalPayaso = cuantosPayasos * payaso
    let totalMuñeca = cuantasMuñecas * muñeca
    let totalPeso = totalPayaso + totalMuñeca
    console.log(totalPeso)
    alert(`El peso total de todos los articulos es ${totalPeso}`)
    if (totalPeso >= 1000){
        let totalPaquetes = totalPeso / 1000
        let redondeado = Math.round(totalPaquetes)
        alert(`La cantidad de paquetes que se enviaran seran ${redondeado}`)
    }else{
        alert('Lo sentimos la cantidad no alcanza el limite estipulado')
    }

}
calculo()
