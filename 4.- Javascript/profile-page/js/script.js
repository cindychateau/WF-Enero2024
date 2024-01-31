console.log("¡Entré a la página!");

function alerta() {
    alert("Hiciste click!");
}
/*
elemento = <a href="#" onclick="cambiar_texto(this)">Find Connections</a>
*/
function cambiar_texto(elemento) {
    //console.log(elem);
    //innerText  -> El texto interno lo cambia

    if(elemento.innerText == "Otro texto") {
        elemento.innerText = "Nuevo texto";
    } else {
        elemento.innerText = "Otro texto";
    }

    //elem.innerText = "Otro texto";
}

function eliminar(elemento){
    elemento.remove();
}

function cambiar_imagen(elemento_img) {
    elemento_img.src = "images/todd-s.jpg";
}

/*
<img src="images/todd-s.jpg" alt="jane-medium-avatar" class="avatar-m" onmouseover="cambiar_imagen(this)" onmouseout="regresa_imagen(this)">
*/
function regresa_imagen(elemento_img) {
    elemento_img.src = "images/jane-m.jpg";
}

var clicks_icono = 0;
function aumentar_clicks() {
    clicks_icono++;
    alert("Haz hecho click:"+clicks_icono);
}

function cambiar_color(elemento_parr) {
    elemento_parr.style.color = "red";

    //background-color -> backgroundColor
    //margin-left -> marginLeft
    elemento_parr.style.marginLeft = "40px";
}

function editar_perfil() {
    var elemento_nombre = document.querySelector("#nombre");
    elemento_nombre.innerText = "Elena de Troya";

    var elemento_locacion = document.querySelector("h3 span");
    elemento_locacion.innerText = "Roma";

    var elemento_p = document.querySelector('.descripcion');
    elemento_p.innerHTML = "Desarrolladora, Ingeniera <br> Reina emperatriz de Troya";

    //Lista/Arreglo con todas las clases
    //elemento_nombre.classList.add("h1_darkmode");
    if(elemento_nombre.classList.contains("h1_darkmode")) {
        //Quitamos la clase
        elemento_nombre.classList.remove("h1_darkmode");
    } else {
        //Agregamos la clase
        elemento_nombre.classList.add("h1_darkmode");
    }
}

var click_arriba = 0;
var click_abajo = 0;

function hizo_click_arriba() {
    click_arriba++;
    var elemento_numero = document.querySelector('#numero-arriba');
    elemento_numero.innerText = click_arriba;
}

function hizo_click_abajo() {
    click_abajo++;
    var elemento_numero = document.querySelector('#numero-abajo');elemento_numero.innerText = click_abajo;
}