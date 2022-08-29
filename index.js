function laCajaDePandora(num) {
  // proximamente escribiremos codigo aqui
  //Cambio de Luciano
  if (num % 2 === 0) {
    return num.toString(2);
  } else {
    return num.toString(16);
  }
}

const Person = {
  nombre: "Luciano",
  apellido: "Balbiano",
  edad: 32,
};

const personFiles = () => {
  return `${Person.nombre} ${Person.apellido}`;
};

console.log(personFiles());
