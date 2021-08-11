function mostrar() {
  /*
  Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)

*/

let juguete,
origen,
precio,
seguir,
//a
tipoMasVendido,
contadorRompecabeza=0,
contadorPelota=0,
contadorMuñeca=0,
//b
promedioImportador,
acumuladorImportado=0,
contadorImportado=0,
//c
totalbruto=0,
//d
 precioRompeNacionalBarato=0,
flag=1,
//e
totalNeto=0;

do {
  juguete = prompt("Ingrese tipo de juguete! muñeca rompecabezas pelota").toLowerCase();
  while (!(juguete=="muñeca" || juguete == "rompecabezas" || juguete=="pelota" )) {
    juguete = prompt("Ingrese tipo de juguete! muñeca rompecabezas pelota").toLowerCase();
  }
  origen = prompt("Ingrese origen! nacional o importado").toLowerCase();
  while (!(origen=="nacional"|| origen=="importado")) {
    origen = prompt("Ingrese origen! nacional o importado").toLowerCase();
  }
  precio = parseFloat(prompt("Ingrese precio! Entre 1000 y 5000"));
  while (!(precio>=1000 && precio<=5000)) {
    precio = parseFloat(prompt("Ingrese precio! Entre 1000 y 5000"));
  }
//a
if (juguete=="pelota"){
  contadorPelota++;
}
if(juguete=="rompecabezas"){
  contadorRompecabeza++;
}
if(juguete=="muñeca") {
  contadorMuñeca++;
}
if(contadorPelota<contadorMuñeca && contadorPelota<contadorRompecabeza){
tipoMasVendido="Pelota";
}else if(contadorMuñeca<=contadorPelota && contadorMuñeca<contadorRompecabeza){
tipoMasVendido="Muñeca";
}else{
  tipoMasVendido="Rompecabeza";
}
//b- El promedio de precio de los juguetes importados
if(origen=="importado"){
  acumuladorImportado+=precio;
  contadorImportado++;
}
seguir=prompt("Quiere seguir ingresando datos? s/n").toLowerCase();
//c- La recaudacion total
totalbruto=+precio;
//d- Cual es el precio del rompecabezas nacional mas barato
if((flag ||precioRompeNacionalBarato<precio)&& ( juguete=="rompecabezas" && origen=="nacional")){
  precioRompeNacionalBarato=precio;
  flag=0;
}
} while (seguir =="s");

//e- Cuanto se percibio de iva en total (es el 21% de las ventas)
totalNeto=totalbruto+(totalbruto * 0.21);

if(contadorImportado!=0){
promedioImportador=acumuladorImportado/contadorImportado;
console.log("El promedio de los juguetes importados son : "+promedioImportador);
}

console.log("El tipo de juguete mas vendido :"+tipoMasVendido);
console.log("El promedio de precio de los juguetes importados :"+promedioImportador);
console.log("La recaudacion total :"+totalbruto);
console.log("Precio del rompecabezas nacional mas barato :"+precioRompeNacionalBarato);
console.log("Iva en total ( el 21% de las ventas) es :"+totalNeto);






}
