const url = "https://api.thecatapi.com/v1/images/search"
const imagen = document.getElementById('img-gatito')
const boton = document.getElementById('btn-gatito')


async function pintarGatito (url){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    console.log(datos[0].url)
    imagen.src = datos[0].url

}

boton.addEventListener('click', () => {
    pintarGatito(url)
})