
function encriptar(){
    var texto=document.getElementById("textoencriptado").value.toLowerCase();

    var textoencriptado=texto.replace(/e/img,"enter");
    var textoencriptado=textoencriptado.replace(/i/img,"imes");
    var textoencriptado=textoencriptado.replace(/a/img,"ai");
    var textoencriptado=textoencriptado.replace(/o/img,"ober");
    var textoencriptado=textoencriptado.replace(/u/img,"ufat");

    document.getElementById("textodesencriptado").innerHTML=textoencriptado;
    var valor= document.getElementById("textoencriptado").value;
    
    if(valor==false){
        document.getElementById("vacio").style.display="show";
        document.getElementById("vacio").style.display="inherit";
        document.getElementById("botoncopiar").style.display="none";
        document.getElementById("textodesencriptado").style.display="none";
    }
    else{
        document.getElementById("vacio").style.display="none";
        document.getElementById("botoncopiar").style.display="show";
        document.getElementById("botoncopiar").style.display="inherit";
        document.getElementById("textodesencriptado").style.display="show";
        document.getElementById("textodesencriptado").style.display="inherit";
    }
}

function desencriptar(){
    var texto=document.getElementById("textoencriptado").value.toLowerCase();

    var textoencriptado=texto.replace(/enter/img,"e");
    var textoencriptado=textoencriptado.replace(/imes/img,"i");
    var textoencriptado=textoencriptado.replace(/ai/img,"a");
    var textoencriptado=textoencriptado.replace(/ober/img,"o");
    var textoencriptado=textoencriptado.replace(/ufat/img,"u");

    document.getElementById("textodesencriptado").innerHTML=textoencriptado;
    var valor= document.getElementById("textoencriptado").value;

    if(valor==false){
        document.getElementById("vacio").style.display="show";
        document.getElementById("vacio").style.display="inherit";
        document.getElementById("botoncopiar").style.display="none";
        document.getElementById("textodesencriptado").style.display="none";
    }
    else{
        document.getElementById("vacio").style.display="none";
        document.getElementById("botoncopiar").style.display="show";
        document.getElementById("botoncopiar").style.display="inherit";
        document.getElementById("textodesencriptado").style.display="show";
        document.getElementById("textodesencriptado").style.display="inherit";
    }

}

function copiar(){
    var contenido=document.querySelector("#textodesencriptado");
    contenido.select();
    document.execCommand("copy");
}