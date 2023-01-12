const inputMensaje = document.getElementById('input');
const inputResultado = document.getElementById('output');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const btnCopiar = document.getElementById('btn-copiar');

function validarMensaje(){
    let check = true;
    var mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz¿?¡!,.:; ";
    for(let letra of mensaje){
        if(!letrasValidas.includes(letra)){
            check = false;
        }
    }
    return check;
}

function encriptar(){
    if(validarMensaje() == true){ 
        var mensaje = inputMensaje.value;
        var mensajeEncriptado = mensaje
        .replaceAll("e","enter") 
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat");
        inputResultado.value = mensajeEncriptado;
    }else{
        alert("Palabra o frase no válida");
    }
}

function desencriptar(){
    if(validarMensaje() == true){ 
        var mensajeEncriptado = inputMensaje.value;
        var mensaje = mensajeEncriptado
        .replaceAll("enter","e") 
        .replaceAll("imes","i")
        .replaceAll("ai","a")
        .replaceAll("ober","o")
        .replaceAll("ufat","u");
        inputResultado.value = mensaje;
    }else{
        alert("Palabra o frase no válida");
    }
}

function copiar(){
    let formul = document.getElementById('formulario');
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    formul.reset();
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;

/*no se han incluido los paréntesis después del nombre de la función porque no se
quiere llamar a la función inmediatamente, solo después de hacer clic en el botón.*/