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