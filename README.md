# Proyecto-Final-IPC
Repositorio para subir los archivos correspondientes al proyecto final del curso IPD del TDS 2022 uGalileo

Proyecto Final Introducción a la Programación de Computadoras
Técnico en Desarrollo de Software – Universidad Galileo

Nombre: Hugo Francisco Felipe Caceros
Carnet: 14008201

Explicación
El programa busca realizar una serie de cálculos dependiendo de los valores que se
solicitan, algunos cálculos son obligatorios como lo son el porcentaje sobre la edad
del usuario y el porcentaje sobre los ingresos.
En todos los casos cuando los valores son dados, se suma el resultado de todos los
cálculos al valore de los ingresos brindados al principio.

Inicio
El programa inicia Solicitando Nombre del usuario
Seguido solicita edad del usuario
	Si la edad de la pareja es entre 18 y 25 operará el 10% sobre los ingresos
	Si la edad de la pareja es entre 25 y 50 operará el 20% sobre los ingresos
Si la edad de la pareja es mayor o igual que 50 operará 30% sobre el precio base
Seguido solicita ingresos del usuario
Calcula el 5% sobre el valor de los ingresos
Seguido solicita cantidad de propiedades con las que cuenta el usuario
Calcula 35% sobre el valor de los ingresos, según cada hijo que responde que tiene
Pregunta si está casado
	Si la respuesta es No
		No realiza nada
	Si la respuesta es Si
		Pregunta edad de la pareja
			Si la edad de la pareja es entre 18 y 25 opera el 10% sobre los ingresos
			Si la edad de la pareja es entre 25 y 50 opera el 20% sobre los ingresos
Si la edad de la pareja es mayor o igual que 50 opera 30% sobre los ingresos
Pregunta si tiene hijos
	Si la respuesta es No
		No realiza ninguna nada
	Si la respuesta es Si
		Pregunta Cantidad de Hijos
			Calcula el 20% sobre el valor de los ingresos, por cada hijo.
Todos los valores calculados se suman al final y esos a su vez se suman a los ingresos.
Se devuelven los valores de Nombre, El total de recargos y la suma de los ingresos más el total de recargos.
Al finalizar se pregunta si desea continuar
Si se escribe salir termina de ejecutar el programa
Si no se escribe inicia nuevamente
Fin
