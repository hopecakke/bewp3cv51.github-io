"use strict";
var forma = document.getElementById("forma"),
    salida1 = document.getElementById("salidaNombre"),
    salida2 = document.getElementById("salidaSecreto"),
    salida3 = document.getElementById("salidaNavegador"),
    salida4 = document.getElementById("salidaEmail"),
    salida5 = document.getElementById("salidaUsuario"),
    salida6 = document.getElementById("salidaUrl"),
    salida7 = document.getElementById("salidaTelefono"),
    salida8 = document.getElementById("salidaBuscar"),
    salida9 = document.getElementById("salidaVerso");
forma.addEventListener("submit", procesa, false);

function procesa(){
  var nombre = forma["nombre"].value;
  salida1.value =  nombre;
  var secreto = forma["secreto"].value;
  salida2.value = secreto;
  var navegador = forma["navegador"].value;
  salida3.value = navegador;
  var email = forma["email"].value;
  salida4.value = email;
  var usuario = forma["usuario"].value;
  salida5.value = usuario;
  var url = forma["url"].value;
  salida6.value = url;
  var telefono = forma["telefono"].value;
  salida7.value = telefono;
  var buscar = forma["buscar"].value;
  salida8.value = buscar;
  var verso = forma["verso"].value;
  salida9.value = verso;
}
