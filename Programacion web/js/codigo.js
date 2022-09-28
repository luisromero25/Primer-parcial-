window.addEventListener("load", function() {
    formulario = this.document.getElementById("formulario");
    formulario.addEventListener("submit", function() {
        event.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let pass = document.getElementById("pwd").value;
        // alert("El nombre es " + nombre + "con contraseña" + pass);
        let respuesta = document.getElementById("result");
        if (nombre == "7s21" && pass == "sisepuede") {
            respuesta.innerText = "Se acepto el ingreso al sistema....."
            respuesta.style.color = "black";
            respuesta.style.fontSize = "2em";
            respuesta.style.width = "500px";
            respuesta.style.height = "150px";
            respuesta.style.backgroundColor = "cyan";
        } else {
            respuesta.innerText = "Estas mal de tu cabeza";
            respuesta.style.color = "red";
            respuesta.style.fontSize = "2em";
            respuesta.style.width = "500px";
            respuesta.style.height = "150px";
            respuesta.style.backgroundColor = "cyan";

        }
    });
})