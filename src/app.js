/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(arr) {
  //write your code here
  let quien = ["mi abuelo", "mi perro", "el gato"];
  let accion = [" no llego a tiempo", "se comio mi tarea", " se comio tu cena"];
  let donde = ["a buscarme", "en mi casa", "en el portal"];

  function generateExcuse() {
    let randomquien = quien[Math.floor(Math.random() * quien.length)];
    let randomaccion = accion[Math.floor(Math.random() * accion.length)];
    let randomdonde = donde[Math.floor(Math.random() * donde.length)];

    const excuse = `${randomquien} ${randomaccion} ${randomdonde}.`;
    console.log(document.getElementById("excuse"));
    document.getElementById("excuse").innerHTML = excuse;
  }
  document
    .getElementById("generateExcuseBtn")
    .addEventListener("click", generateExcuse);
  console.log("Generador de excusas inicializado!");
};
