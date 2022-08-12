//Uso de variables
/*var nombre = 'Grover';
console.log(nombre);
console.log(typeof(nombre));

var edad = 34;
console.log(edad);
console.log(typeof(edad));

edad = 'Cinco';
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);

puestoDeTrabajo = null;
console.log(puestoDeTrabajo);
**********************************/

/*************
 * Operadores matemáticos +, -, *, /
 */

 /*var edadAna, edadMaria, diferenciaEdad;
 var sumaEdades, yearAna, yearMaria, yearActual;

 edadAna = 34;
 edadMaria = 28;
 yearActual = 2019;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana ' + yearAna);
console.log('Año en que nació María ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2)*/

/****
 * Operadores Lógicos, unarios y de asignación
 */
//Lógicos < > <= >= ==
/*var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//Unarios, ++Incremento, --Decremento
//edadAna++;
console.log(++edadAna);
console.log(edadAna);

//Asignación, +=, -=, *=, /=, %=
/*var a = 12;
var b = 5;

var c = a % 5; //Residuo o resto de una división
console.log(c);
a += b;
console.log(a);*/

/* la suma de los 100 primeros numero con for 
var t = 0
for(var n=0; n<=100; n+=2){
    t += n;
    console.log(n);
    console.log(t);
}
console.log("la suma de los cien primeros numeros es: " + t);/*


/* la suma de los 100 primeros numero con while
var t = 0
var n = 0;
while(n <100){
n++;
t +=n;
console.log(n)
console.log(t)

}
console.log("la suma de los cien primeros numeros es: " + t);*/

// la suma de los 100 primeros numero con Do while
var t = 0;
var n = 0;

do{
    console.log(n)
    console.log(t)
    n++;
    t +=n;
}while(n<=100)

console.log("la suma de los cien primeros numeros es: " + t);




