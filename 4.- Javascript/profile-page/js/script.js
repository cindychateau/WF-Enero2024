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