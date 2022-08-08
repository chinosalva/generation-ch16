// // DOM

// // get ElementById()
// let selector = document.getElementById('parrafo1')
// console.log(selector)
// selector.textContent = "Helloworld"
// selector.style.color = 'red'
// selector.style.backgroundColor = 'yelow'


// const parrafo2 = document.querySelector('.parrafo')
// console.log(parrafo2.textContent)
// parrafo2.textContent = "\n Modificando el contenido"

// const parrafos = document.querySelectorAll('p')
// console.log(parrafos)



// // css - font-size
// parrafos[2].style.fontSize = "2rem"

// // \n -- inserta un salto de linea === <br>

// // modificar los atributos de html

// const enlace = document.getElementById("enlace")
// enlace.href = 'https://www.youtube.com/'
// enlace.taget = "_blank"
// enlace.textContent = 'Enlace a youtube'

const parrafo3 = document.getElementById("parrafo3")
// console.log(parrafo3.nodeName)
// console.log(parrafo3.textContent)
// console.log(document.body.innerHTML)
// console.log(parrafo3.outerHTML)

// parrafo3.innerHTML = '<a href="http://www.youtube.com>Enlace</a>'

// parrafo3.innerHTML = '<div class="elemento">esto es un div </div>'

console.log(parrafo3.classList.contains("elemento"))
parrafo3.classList.add("elemento")
console.log(parrafo3.classList.contains("elemento"))

const cambiarColor = () => {
    parrafo3.classList.toggle("elemento")
}

cambiarColor()
cambiarColor()






