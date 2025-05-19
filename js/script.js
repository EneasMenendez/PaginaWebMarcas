function ejemploVariables() {
  var numero = parseFloat(document.getElementById("numeroInput").value);
  var cadena = document.getElementById("cadenaInput").value;
  var booleanoTexto = document.getElementById("booleanoInput").value.trim().toLowerCase();
  var booleano = booleanoTexto === "true";

  alert(`Número: ${numero}  \nCadena: ${cadena}\nBooleano: ${booleano}`);
}

function ejemploArray() {
  var arrayTexto = document.getElementById("arrayInput").value;
  var indice = parseInt(document.getElementById("indiceInput").value);
  var array = arrayTexto.split(",").map(e => e.trim());

  if (indice >= 0 && indice < array.length) {
    alert(`Elemento en la posición ${indice}: ${array[indice]}`);
  } else {
    alert("Índice fuera de rango");
  }
}

function ejemploIf() {
  var estacion = parseInt(document.getElementById("estacionInput").value);
  if (estacion >=4 && estacion <=6) {
    alert("Primavera");
    }
  if (estacion >=7 && estacion <=9) {
    alert("Verano");
    }
  if (estacion >=10 && estacion <=12) {
    alert("Otoño");
    }
     else {
    alert("Invierno");
  }
}

function ejemploFor() {
  var repeticiones = parseInt(document.getElementById("forInput").value);
  var salida = "";
  for (var i = 0; i < repeticiones; i++) {
    salida += i + " ";
  }
  alert("FOR: " + salida);
}

function ejemploSwitch() {
  var dia = document.getElementById("switchInput").value.toLowerCase();
  switch (dia) {
    case "lunes":
      alert("1º dia de la semana");
      break;
    case "viernes":
      alert("5º dia de la semana");
      break;
    case "Sabado":
    case "Domingo":
      alert("7º dia de la semana");
      break;
    default:
      alert("Media semana");
  }
}

function ejemploWhile() {
  var veces = parseInt(document.getElementById("whileInput").value);
  var contador = 0;
  var salida = "";
  while (contador < veces) {
    salida += contador + " ";
    contador++;
  }
  alert("WHILE: " + salida);
}

function ejemploBreak() {
  var limite = parseInt(document.getElementById("breakInput").value);
  var cortarEn = parseInt(document.getElementById("breakStop").value);
  var salida = "";

  for (var i = 0; i < limite; i++) {
    if (i ===  cortarEn) break;
    salida += i + " ";
  }

  alert("BREAK: " + salida);
}
