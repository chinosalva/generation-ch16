const saludo = "Hola Mundo"
const datos = [
    {
        nombre: "Jonatan",
        apellido: "Vazques"
    },
    {
        nombre: "Jonatan",
        apellido: "Vazques"
    },
    {
        nombre: "Jonatan",
        apellido: "Vazques"
    }
]
// simular una peticion
function obtenerDatos (){

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve(datos)
            }else {
                reject("Nunca te quiso")
            }

            
        }, 2000)
    })

    
}
obtenerDatos().then((zapato) => {
    console.log(zapato)
}).catch((error) => {
    console.log(error)
})

// forma #2

async function funcionAsincrona () {
    try {
        const datos = await obtenerDatos()
    console.log(datos)
    }.catch(error){
        console.log(error)
    }
    
}

funcionAsincrona()