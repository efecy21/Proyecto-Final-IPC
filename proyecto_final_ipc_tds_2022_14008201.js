/*
  Proyecto final
  Introducción a la Programación de Computadoras
  Técnico en Desarrollo de Software - 2022
  
  Nombre: Hugo Francisco Felipe Caceros
  Carnet: 14008201
*/

var fin = ""

while (fin != "Salir")
{
//Variables utiles 

//Valores de los recargos 

var edad_18 = 0.1;// 10%
var edad_25 = 0.2;// 20%
var edad_50 = 0.3;// 30%

var casado_18 = 0.1;// 10%
var casado_25 = 0.2;// 20%
var casado_50 = 0.3;// 30%

var hijos_recargo = 0.2;// 20%

var propiedades_recargo = 0.35;// 35%

var ingresos_recargo = 0.05;// 5%

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

//Se solicita que se registre el ingreso del usuario
var precio = prompt("¿Registre sus ingresos?")

//Se solicita que se registre la cantidad de propiedades del usuario
var propiedades = prompt("¿Registre la cantidad de propiedades con las que cuenta?")

var casado = prompt("¿Está casado actualmente?")
	//Comprobamos la edad del cónyuge, solamente si se está casado/a
	var edad_conyuge
	
		if("SI" == casado.toUpperCase()){
		  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
		}
//convirtiendo las edades ingresadas a números 
	var edad_numero = parseInt(edad)
    var precio_base = parseInt(precio)
	var edad_conyuge_numero = 0
		//convirtiendo la edad del cónyuge si se esta casado/a
		if("SI" == casado.toUpperCase()){
		  edad_conyuge_numero = parseInt(edad_conyuge)
		}
var hijos = prompt("¿Tiene hijos o hijas?")
	//Comprobamos la cantidad de hijos solamente si los tienen
	var cantidad_hijos
		//convierte la cantidad de hijos a numero
		if("SI" == hijos.toUpperCase()){
		  cantidad_hijos = prompt("¿Cuantos hijos tiene?", "si/no")
		}
	var cantidad_hijos_numero  = parseInt(cantidad_hijos)
    var propiedades_numero = parseInt(propiedades)
//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final

/** 
 * 1. Recargo por la edad del usuario
 */
if(edad_numero>=18 && edad_numero<25){

  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
} else if(edad_numero>=25 && edad_numero<50){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_25
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
} else if(edad_numero>=50){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_50
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}

/** 
 * 2. Recargo por la edad del conyuge
 */
if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * casado_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
} else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * casado_25
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
} else if(edad_conyuge_numero>=50){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * casado_50
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
} 

/**
 * 3. Recargo por la cantidad de hijos 
 */
if(cantidad_hijos_numero > 0) {
    recargo = precio_base * hijos_recargo
    recargo = recargo * cantidad_hijos_numero
    recargo_total = recargo_total + recargo
}

/**
 * 4. Recargo por los Ingresos del Asegurado
 */
if(precio_base > 0) {
    recargo = precio_base * ingresos_recargo
    recargo_total = recargo_total + recargo
}

/**
 * 5. Recargo por la cantidad de propiedades 
 */
if(propiedades_numero > 0) {
    recargo = precio_base * propiedades_recargo
    recargo = recargo * propiedades_numero
    recargo_total = recargo_total + recargo
}

precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
  fin = prompt ("¿Desea continuar?, (Si no, Escriba Salir)")
}