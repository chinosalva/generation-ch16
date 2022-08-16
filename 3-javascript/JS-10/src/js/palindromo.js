const palindromo = (palabra) => {
    const comparacion = palabra.split("").reverse().join("")
    if (palabra === comparacion){
        return 'Tu palabra si es palindroma'
    }else {
        return 'Tu palabra no es palindrma'
    }
}
console.log(palindromo('ojo'))