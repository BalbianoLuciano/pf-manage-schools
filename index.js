function calculo(num){
    if(num % 2 === 0){
      return num.toString(2)
    } else {
      return num.toString(16)
    }
   }
   
   console.log(laCajaDePandora(128))

   const Persona ={
    nombre: "Santiago",
    apellido: "Vergara",
    edad: 24,
    grupo: "27b"
}

const FuncionRequerida = ()=>{
    return `${Persona.nombre} ${Persona.apellido}`
}

console.log(FuncionRequerida())