const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"

// Elementos del DOM
const imgPokemon = document.getElementById('img-pokemon')
const idPokemon = document.getElementById('id-pokemon')
const nombrePokemon = document.getElementById('nombre-pokemon')
const listaHabilidades = document.getElementById('lista-habilidades')
const listaTipos = document.getElementById('lista-tipos')
const formularioPokemon = document.getElementById('buscador-pokemon')
const inputPokemon = document.getElementById('busquedaPokemon')

// Eventos

async function obtenerPokemon (url){
    try {
        const response = await fetch(url)
    const datos = await response.json()
    console.log(datos)
    const pokemon = {
    nombre: datos.forms[0].name,
    numero: datos.id,
    tipo: datos.types,
    imagen: datos.sprites.other["official-artwork"].front_default,
    Habilidades: datos.abilities 
    }
        imgPokemon.src = pokemon.imagen
        idPokemon.textContent = `ID: ${pokemon.numero}`
        nombrePokemon.textContent = pokemon.nombre
        // Habilidades
        let template = ``
        for (let x = 0; x < pokemon.Habilidades.length; x++){
            const imprimir = pokemon.Habilidades[x].ability.name
            template += `<li class="list-group-item">${imprimir}</li>`
        }
        // Tipos
        let template1 = ''
        pokemon.tipo.forEach(element => {
            const imprimir1 =  element.type.name
            template1 += `<li class="list-group-item">${imprimir1}</li>`
        });
        listaHabilidades.innerHTML = template
        listaTipos.innerHTML = template1
    } catch (error) {
        let simple = '`<h1>404 NOT FOUND</h1>`'
        document.body.innerHTML(simple)
    }
    
}
formularioPokemon.addEventListener('submit', (e) => {
    e.preventDefault()
    const nuevaBusqueda = urlPokemon + inputPokemon.value 
    obtenerPokemon(nuevaBusqueda)
    })
