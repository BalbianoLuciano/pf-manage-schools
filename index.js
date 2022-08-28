const funcionProbandoGit = (numero) => {
    if (numero % 2 === 0) {
        return numero.toString(2)
    } else {
        return numero.toString(16)
    }
}

const Persona = {
    nombre: "Gerardo",
    apellido: "Fornies",
    edad: 32,
    grupo: "27b"
}

const FuncionRequerida = () => {
    return `${Persona.nombre} ${Persona.apellido}`
}

console.log(FuncionRequerida())