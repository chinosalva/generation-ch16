'use strict'

const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

// Elementos del DOM
const imagenPerrito = document.getElementById('img-perrito')
const btn = document.getElementById('btn-perrito')

async function obtenerPerritoAleatorio (url){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    console.log(datos.message)
    console.log(datos.status)
    imagenPerrito.src = datos.message
}

btn.addEventListener('click', () => {
    
    obtenerPerritoAleatorio(urlAleatorios)
})