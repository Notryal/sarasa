function mostrar() {
/*
Se necesita llevar la gestión de una veterinaria. 
Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad
*/
let nombre,
tipo,
sangre,
edad,
sexo,
seguir,
//a
acumuladorEdadReptil=0,
contadorReptil=0,
promedioEdadReptil,
//b
mascotaTipoJoven,
mascotaSexoJoven,
mascotaJoven,
flag=1,
//c
porcentajeAves=0,
mascota=0,
contadorAves=0,
//d
maxTipoMascota,
contadorMamifero=0;

do {
  nombre = prompt("Ingrese nombre de su mascota").toLowerCase(); 
  while(!(nombre.length>=3 && nombre.length<=8)){
    nombre = prompt("Ingrese nombre de su mascota, entre 3 y 8 caracteres").toLowerCase();
  }
  tipo = prompt("Ingrese tipo de mascota (“mamifero”, “ave”, “reptil”)").toLowerCase();
  while(!(tipo == "ave" || tipo=="mamifero" || tipo=="reptil")){
    nombre = prompt("Ingrese el tipo de mascota (“mamifero”, “ave”, “reptil”)").toLowerCase();
  }
  if(tipo=="reptil"){
    sangre="fria"
    alert("Los reptiles solo pueden tener sangre fria");
  } else{  
    sangre = prompt("Ingrese si la sangre de su mascota es fria o calida").toLowerCase();
    while (!(sangre=="fria"||sangre=="calida")) {
    sangre = prompt("Ingrese si la sangre de su mascota es fria o calida").toLowerCase();
  }
  }

  edad = parseInt(prompt("Ingrese edad de su mascota"));
  while (!(edad>0)) {
  edad = parseInt(prompt("Ingrese edad de su mascota"));
  }
  sexo = prompt("Ingrese sexo de su mascota (“m” de macho o “h” de hembra )").toLowerCase(); 
  while(!(sexo == "h" || sexo=="m")){
    sexo = prompt("Ingrese sexo de su mascota m o h").toLowerCase();
  }
  mascota++;

  if(tipo=="reptil"){
  acumuladorEdadReptil+=edad;
  contadorReptil++;
  }

  if(flag || edad<mascotaJoven){
  flag=0;
  mascotaTipoJoven=tipo;
  mascotaSexoJoven=sexo;
  }

  if (tipo=="ave") {
  contadorAves++;
  }
  if(tipo=="mamifero"){
    contadorMamifero++;
  }

  seguir=prompt("Quiere seguir ingresando datos? s/n").toLowerCase();
} while (seguir=="s");

if(contadorReptil!=0){
  promedioEdadReptil=acumuladorEdadReptil/contadorReptil
  console.log("El promedio de edad de los reptiles es : "+promedioEdadReptil);
}

if (contadorAves!=0) {
  porcentajeAves=Math.floor(contadorAves*100/mascota);
  console.log("El porcentaje de aves es : "+porcentajeAves);
} 

if(flag){
  console.log("No se ingresaron mascotas o todos tienen la misma edad")
} else{
  console.log("El tipo de mascota mas joven es " +mascotaTipoJoven+ " y su sexo es " +mascotaSexoJoven);
}

if (contadorAves<contadorReptil && contadorAves<contadorMamifero) {
  maxTipoMascota= "Aves";
} else if(contadorMamifero<=contadorAves && contadorMamifero<contadorReptil) {
  maxTipoMascota= "Mamiferos";
} else{
  maxTipoMascota= "Reptiles";
}

console.log("El mayor tipo de mascotas es : "+maxTipoMascota);











}////
