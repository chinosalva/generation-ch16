// let x = 10
// console.log(x.length)

let persona = {
    nombre: 'Juan',
    apellido: 'Fernandez',
    edad: 24,
    email: 'juan@gmail.com',
    // nombreCompleto: function (){
    //     return `${persona.nombre} ${persona.apellido}`
    // }
    idioma: 'es',
    get leng (){
        return this.idioma.toUpperCase()
    },
    
    set leng (lang){
        this.idioma = lang.toLocaleLowerCase()
    }
}
console.log(persona.leng)
persona.lang = 'ES'
console.log(persona.leng)
console.log(persona.idioma)