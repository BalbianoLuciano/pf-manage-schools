function laCajaDePandora(num){
    if(num % 2 === 0){
      return num.toString(2)
    } else {
      return num.toString(16)
    }
   }
   
   console.log(laCajaDePandora(128))


   const Persona ={
    nombre: "ricardo",
    apellido: "david",
    edad: 32,
    grupo: "de otro"
}

const FuncionRequerida = ()=>{
    return `${Persona.nombre} ${Persona.apellido}`
}

console.log(FuncionRequerida())