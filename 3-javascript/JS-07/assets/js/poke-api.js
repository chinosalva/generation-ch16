const urlPokemon = "https://pokeapi.co/api/v2/pokemon/56"


// Elementos del DOM
const imgPokemon = document.getElementById('img-pokemon')
const idPokemon = document.getElementById('id-pokemon')
const nombrePokemon = document.getElementById('nombre-pokemon')


async function obtenerPokemon (url){
    const response = await fetch(url)
    const datos = await response.json()
    const pokemon = {
    nombre: datos.forms[0].name,
    numero: datos.id,
    tipo: datos.types,
    imagen: datos.sprites.other["official-artwork"].front_default
        }
        imgPokemon.src = pokemon.imagen
        idPokemon.textContent = `ID: ${pokemon.numero}`
        nombrePokemon.textContent = pokemon.nombre
    }

obtenerPokemon(urlPokemon)