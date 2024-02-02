function alerta(elemento) {
    //elemento = <a href="#" onclick="alerta(this)">Dallas</a>
    var lugar = elemento.innerText; //Dallas
    alert("Cargando informe meteorológico..."+lugar);

    document.querySelector('#lugar').innerText = lugar;

}

function eliminar_cookies() {
    var elemento_cookie = document.querySelector('.cookie');
    elemento_cookie.remove();

    //document.querySelector('.cookie').remove();
}

function cambiar_temperatura() {
    var grados_c = [24, 18, 27, 19, 21, 16, 26, 21];
    var grados_f = [75, 65, 80, 66, 69, 61, 78, 70];

    var elemento_select = document.querySelector('select');

    //.value sería lo que el usuario escribió/eligió
    console.log(elemento_select.value);

    for(var i=0; i < 8; i++) {
        //#temp0 -> <span class="max" id="temp0">24</span>
        var elemento_temperatura = document.querySelector('#temp'+i);
        if(elemento_select.value == "F") {
            elemento_temperatura.innerText = grados_f[i];
        } else {
            elemento_temperatura.innerText = grados_c[i];
        }
    }

    /*
    for(let i=0; i<8; i++){
        var tempElement = document.querySelector('#temp'+i);
        var temperature = tempElement.innerText;
        temperature = parseInt(temperature); //Transforms text to int
        console.log(temperature);

        var newTemp = 0;
        if(fOc === "C"){
            //F -> C
            newTemp = Math.round((temperature - 32) * 5 / 9);
        } else{
            //C -> F
            newTemp = Math.round((temperature * 9 / 5) + 32);
        }

        tempElement.innerText = newTemp;        
    }
    */

}