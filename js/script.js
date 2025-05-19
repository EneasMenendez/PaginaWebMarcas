function ejemploVariables() {
  let numero = parseFloat(document.getElementById("numeroInput").value);
  let cadena = document.getElementById("cadenaInput").value;
  let booleanoTexto = document.getElementById("booleanoInput").value.trim().toLowerCase();
  let booleano = booleanoTexto === "true";

  alert(`Número: ${numero}\nCadena: ${cadena}\nBooleano: ${booleano}`);
}

function ejemploArray() {
  let arrayTexto = document.getElementById("arrayInput").value;
  let indice = parseInt(document.getElementById("indiceInput").value);
  let array = arrayTexto.split(",").map(e => e.trim());

  if (indice >= 0 && indice < array.length) {
    alert(`Elemento en la posición ${indice}: ${array[indice]}`);
  } else {
    alert("Índice fuera de rango");
  }
}

function ejemploIf() {
  let nota = parseFloat(document.getElementById("notaInput").value);
  if (nota >= 5) {
    alert("Aprobado");
  } else {
    alert("Suspendido");
  }
}

function ejemploFor() {
  let repeticiones = parseInt(document.getElementById("forInput").value);
  let salida = "";
  for (let i = 0; i < repeticiones; i++) {
    salida += i + " ";
  }
  alert("FOR: " + salida);
}

function ejemploSwitch() {
  let dia = document.getElementById("switchInput").value.toLowerCase();
  switch (dia) {
    case "lunes":
      alert("Inicio de semana");
      break;
    case "viernes":
      alert("¡Casi es fin de semana!");
      break;
    case "sábado":
    case "domingo":
      alert("Fin de semana");
      break;
    default:
      alert("Día normal");
  }
}

function ejemploWhile() {
  let veces = parseInt(document.getElementById("whileInput").value);
  let contador = 0;
  let salida = "";
  while (contador < veces) {
    salida += contador + " ";
    contador++;
  }
  alert("WHILE: " + salida);
}

function ejemploBreak() {
  let limite = parseInt(document.getElementById("breakInput").value);
  let cortarEn = parseInt(document.getElementById("breakStop").value);
  let salida = "";

  for (let i = 0; i < limite; i++) {
    if (i === cortarEn) break;
    salida += i + " ";
  }

  alert("BREAK: " + salida);
}
