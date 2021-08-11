function mostrar() {
/*
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. 
*/

let carrera,
sexo,
cantidadMaterias,
notaPromedio,
edad,
//a
nombreMejorPromedio,
notaMejorPromedio,
flag=1,
//b
edadMujerJoven=0,
nombreMujerJoven,
flag1=1,
//c
contadorFisica=0,
contadorQuimica=0,
contadorSistemas=0,
porcentajeQuimica,
porcentajeFisica,
porcentajeSistemas,
//d
flag2=1,
alumnoMayorMaterias,
edadMaxMaterias,
nombreMaxMaterias;

for (let i = 0; i < 500; i++) {
  nombre = carrera = prompt("Ingrese su nombre!").toLowerCase();
  while (!(isNaN(nombre)) && (marca.length <0)) {
  nombre = prompt("Ingrese su nombre! no lo deje VACIO").toLowerCase();
  }
  carrera = prompt("Ingrese su carrera! Quimica Fisica Sistemas").toLowerCase();
  while (!(carrera == "quimica" || carrera =="fisica" || carrera =="sistemas")) {
  carrera = prompt("Ingrese su carrera! Quimica Fisica Sistemas").toLowerCase();
  }
  sexo = prompt("Ingrese su sexo! masculino - femenino -no binario").toLowerCase();
  while (!(sexo == "masculino" || sexo=="femenino" || sexo=="no binario")) {
  sexo = prompt("Ingrese su sexo! masculino - femenino -no binario").toLowerCase();
  }
  cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias, entre 1 y 5"));
  while (!(cantidadMaterias>=1 && cantidadMaterias<=5)) {
  cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias, entre 1 y 5"));
  }
  notaPromedio = parseInt(prompt("Ingrese la cantidad de materias, entre 1 y 10"));
  while (!(cantidadMaterias>=1 && cantidadMaterias<=10)) {
  notaPromedio = parseInt(prompt("Ingrese la cantidad de materias, entre 1 y 10"));
  }
  edad = parseInt(prompt("Ingrese su edad!"));
  while (!(edad>0)) {
  edad = parseInt(prompt("Mayor a 0!"));
  }
  if (carrera=="quimica") {
  contadorQuimica++;
  }
  if(carrera=="sistemas") {
    contadorSistemas++;
  }
  if (carrera=="fisica") {
    contadorFisica++;
  }

//a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
if (carrera=="fisica" && (flag || notaPromedio<notaMejorPromedio)) {
  nombreMejorPromedio=nombre;
  flag=0;
}
//b) El nombre de la alumna mas joven.
if (sexo=="femenino" && (flag1 || edadMujerJoven<edad)) {
  nombreMujerJoven=nombre;
  edadMujerJoven=edad;
  flag1=0;
  }
  //d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. 
if ((flag2 || alumnoMayorMaterias<cantidadMaterias) && carrera!="quimica") {
  flag2=0,
  edadMaxMaterias=edad;
  nombreMaxMaterias=nombre;
  }
}
//c) Porcentaje de estudiantes que estudia cada carrera.
porcentajeQuimica= contadorQuimica*100/500;
porcentajeFisica=contadorFisica*100/500;
porcentajeSistemas=contadorSistemas*100/500;


console.log("El nombre del mejor promedio de los alumnos que estudian Fisica es :" +nombreMejorPromedio);
console.log("El nombre de la alumna mas joven es :"+nombreMujerJoven+ " y su edad es :"+edadMujerJoven);
console.log("El porcentaje de estudiantes de quimica es :"+porcentajeQuimica);
console.log("El porcentaje de estudiantes de fisica es :"+porcentajeFisica);
console.log("El porcentaje de estudiantes de sistemas es :"+porcentajeSistemas);
console.log("La edad y nombre del estudiante que cursa mas materias es :"+edadMaxMaterias+ "y su nombre es "+nombreMaxMaterias);



}//////////////////
