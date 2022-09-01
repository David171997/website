const inputTexto=document.querySelector(".inputTexto");
const mensaje=document.querySelector(".mensaje");

function botonEncriptar(){
    if (inputTexto.value != "") {
    
        const textoEncriptado = encriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        inputTexto.value="";
    }else{
        alert("Ingrese un texto.")
    }
}

function botonDesencriptar(){
    if (inputTexto.value != "") {
    
        const textoEncriptado = desencriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        inputTexto.value="";
    }else{
        alert("Ingrese un texto.")
    }
}


function encriptar(stringEncriptar) {
    stringEncriptar = stringEncriptar.toLowerCase();
    var vocales = ["a", "e", "i", "o", "u"];
    var remplazo = ["ai","enter","imes","ober", "ufat"];
    var resultado = "";

    for (var i = 0; i < stringEncriptar.length; i++) {
    
        if (stringEncriptar[i] == "a" || stringEncriptar[i] == "e" || stringEncriptar[i] == "i" || stringEncriptar[i] == "o" || stringEncriptar[i] == "u") {

            for (var j = 0; j < remplazo.length; j++) {

                if (stringEncriptar[i] == vocales[j]) {

                    resultado = resultado + remplazo[j];
                    break;
                }
            }
        } else{
            resultado = resultado + stringEncriptar[i];
        }
    
    }

    return resultado;

}

function desencriptar(stringDesencriptar) {
    stringDesencriptar = stringDesencriptar.toLowerCase();
    var vocales = ["a", "e", "i", "o", "u"];
    var remplazo = ["ai","enter","imes","ober", "ufat"];
    var resultado = "";

    for (var i = 0; i < stringDesencriptar.length; i++) {
    
        if (stringDesencriptar[i] == "a" || stringDesencriptar[i] == "e" || stringDesencriptar[i] == "i" || stringDesencriptar[i] == "o" || stringDesencriptar[i] == "u") {

            for (var j = 0; j < remplazo.length; j++) {
                var cambio = remplazo[j]

                if (stringDesencriptar[i] == cambio[0]) {
                    resultado = resultado + vocales[j];
                    i = i + cambio.length - 1;
                    break;
                }
            }
        } else{
            resultado = resultado + stringDesencriptar[i];
        }
    
    }

    return resultado;

}

function copiar() {
    if (mensaje.value != "") {
        mensaje.select();
        navigator.clipboard.writeText(mensaje.value) 
        alert("Texto copiado.")
    } else{
        alert("No hay nada que copiar.")
    }
    
}

