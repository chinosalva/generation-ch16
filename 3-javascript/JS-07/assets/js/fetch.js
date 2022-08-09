const url = "https://dog.ceo/api/breeds/image/random"

fetch(url)
.then((response) => response.json())
.then((datos) => {
    console.log(datos)
}).catch((error) => {
    console.log(error)
})

async function obtenerPerrito (){

    try {
        const respuesta = await fetch(url)
    const datos = await respuesta.json()
    console.log(datos)
    } catch (error) {
        console.log(error)
    }
    
}
obtenerPerrito()