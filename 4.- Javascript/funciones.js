/*
Función: Bloque de código al que nombramos y que podemos llamar las veces que yo necesite
*/

function saludo(){
    console.log("Hola");
    console.log("¿Cómo estás hoy?");
}

saludo();
saludo();
saludo();

//nombre = "Juana"
function saludo_nombre(nombre) {
    console.log(`¡Hola ${nombre}!`);
    console.log("Hola "+nombre);
}

saludo_nombre("Elena");
saludo_nombre("Juana");

//nombre = "Elena"; apellido = "De Troya"
function saludo_na(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludo_na("Elena", "De Troya");

//num1 = 11; num2 = 20
//return 31
function sumatoria(num1, num2) {
    return num1 + num2;
}

var resultado = sumatoria(11, 20); //31
console.log("El resultado es:"+resultado);

/*SIGMA
5 = 5 + 4 + 3 + 2 + 1
*/


var lista_numeros = [3, 6, 9, 12, 15];

for(var n1=0; n1 < lista_numeros.length; n1++) {
    lista_numeros[n1] += 1;
}

console.log(lista_numeros);
