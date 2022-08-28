const funcionProbandoGit = (numero)=>{
    if(numero % 2 === 0){
      return numero.toString(2)
    } else {
      return numero.toString(16)
    }
   }

/*Segundo requerimiento*/

const Persona ={
    nombre: "Lorena",
    apellido: "Rodriguez",
    edad: 33,
    grupo: "27b"
}

const FuncionRequerida = ()=>{
    return `${Persona.nombre} ${Persona.apellido}`
}

console.log(FuncionRequerida())