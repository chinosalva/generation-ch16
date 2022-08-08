const saludar = () => {
alert('Hola')
}

const boton = document.getElementById('boton')
boton.addEventListener('dblclick', saludar)




const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(form[0].value)
})