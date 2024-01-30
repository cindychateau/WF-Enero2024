console.log("Hola mundo!");

var num = 1;
var texto = "Este es un texto";
var decimal = 1.11;
var bool = true; //Boolean: true o false

console.log(texto);

var despues;
console.log(despues); //Por default el valor de mi variable es undefined
despues = "Texto colocado despues";
console.log(despues);
despues = 10;
console.log(despues);

var num1 = 5.3;
var num2 = 3;
var suma = num1 + num2; // 5 + 3 = 8
console.log(suma);

// + - / * %

//Concatenar -> pegar dos textos
var nombre = "Elena de Troya";
var presentacion = "Mi nombre es:";
console.log(presentacion+nombre);

var otro_nombre = "Juana de Arco";
var edad = 19;
var mensaje = `Mi nombre es: ${otro_nombre}, ¿cómo estás? Tengo ${edad} años`; //Interpolación
var mensaje2 = "Mi nombre es: "+otro_nombre+", ¿cómo estás? Tengo "+edad+" años"; //Sin interpolación - Concatenando
console.log(mensaje);
console.log(mensaje2);

var combinamosTexto = "ABC";
console.log(combinamosTexto + num1);
console.log(combinamosTexto + num1 + num2);
console.log(num1 + num2 + combinamosTexto);

var orden = 10 + 20 / 6;
console.log(orden);
// 1.- (), 2.- */%, 3.- -+

var n = 14;
n += 5; //n = n+5 = 14+5 = n = 19 
// */-+

var nombre_completo = "Pedro";
nombre_completo += " Paramo"; // "Pedro Paramo"
console.log(nombre_completo);

// Comentario de línea
/*
Comentario de bloque
*/

/* CONDICIONALES */
var booleana = false;
if(booleana) { // booleana == true
    console.log("Variable verdadera");
} else {
    console.log("Variable falsa");
}

if(n >= 15) { //  a === b; a !== b; a < b; a > b; a <= b; a >= b
    console.log("Número mayor a 15");
} else {
    console.log("Número menor a 15");
}

var edad_nino = 6;
if(edad_nino < 2) {
    console.log("Es un bebe");
} else if(edad_nino < 5) { //2-5
    console.log("Es un toddler");
} else {
    console.log("Es un niño");
}

var temperatura = 20;
var estaLloviendo = true;
if(temperatura >= 18 && !estaLloviendo) { // && Ambas condicionales deben cumplirse
    console.log("¡Es un buen día para dar un paseo!");
} else {
    console.log("Daremos el paseo cuando las condiciones sean óptimas");
}

var edad_conducir = 17;
var permisoPadres = true;
if(edad_conducir >= 18 || permisoPadres) { // || una u otra condicional se cumple
    console.log("Tienes permiso para obtener tu licencia de manejo");
}

/* BUCLES/ CICLO */

/*
i = 0
¡Holi!
Estoy en un bucle
----
i = 1
¡Holi!
Estoy en un bucle
----
i = 2
¡Holi!
Estoy en un bucle
----
i = 3
¡Holi!
Estoy en un bucle
----
i = 4
*/
for(var i=0; i < 4; i++) { //declaracion; condicional/comparacion; aumento/decremento/cambio
    console.log("¡Holi!");
    console.log("Estoy en un bucle");
}

for(var j=0; j < 10; j+=2) {
    console.log("Bucle:"+j);
}

/*
x = 0
Entramos al while
x = 1
----
Entramos al while
x = 2
----
Entramos al while
x = 3
*/
var x = 0;
while(x < 3) {
    console.log("Entramos al while");
    x++;
}

/*
inicio = 2
final = 8
Entramos al segundo while
inicio = 3
final = 7
---
Entramos al segundo while
inicio = 4
final = 6
---
Entramos al segundo while
inicio = 5
final = 5
*/
var inicio = 2;
var final = 8;
while(inicio < final) {
    console.log("Entramos al segundo while");
    inicio++;
    final--;
}

/* ARRAY/ARREGLO/LISTA */
var hobbies = [ 
    "Leer", //0
    "Correr", //1
    "Bailar", //2
    "Cantar",//3
    "Jugar" //4
];

console.log(hobbies[0]);

hobbies[1] = "Trotar";
console.log(hobbies);

//hobbies.length = 5
for(var z=0; z < hobbies.length; z++) {
    console.log(hobbies[z]);
}