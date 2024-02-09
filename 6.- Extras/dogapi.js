/* PROMESA */
function muestraPerrito() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            /*
            data = {
                "message": "url/imagen.png",
                "status": "success"
            }
            */
            var imagen_perrito = `<img src="${data["message"]}" alt="perrito">`;

            var img_concatenada = "<img src='"+data["message"]+"' alt='perrito'>";

            document.querySelector('.img').innerHTML = imagen_perrito;

        })
}

/* ASYNC */
async function muestraPerritoAsync() {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var data = await response.json();
    /*
    data = {
        "message": "url/imagen.png",
        "status": "success"
    }
    */
    var imagen_perrito = `<img src="${data["message"]}" alt="perrito">`;
    document.querySelector('.img').innerHTML = imagen_perrito;
}