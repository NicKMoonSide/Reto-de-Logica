/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
function ingresoDatos() {
  alert("Ingresara el poligono de su gusto para calcular su Area");
  alert(
    "Los polígonos soportados serán triangulo, cuadrado y rectangulo, escribalos TAL CUAL SIN TILDE.",
  );
  let poligono = prompt("Que poligono desea:");
  areaPoligono(poligono);
}
function areaPoligono(poligono) {
  poligono = poligono.toLowerCase();
  switch (poligono) {
    case "triangulo":
      let baseTr = prompt("Ingrese la base del triangulo: ");
      let altTr = prompt("Ingrese la altura del triangulo: ");
      alert("El area del triangulo es:" + (baseTr * altTr) / 2);
      break;
    case "cuadrado":
      let ladocd = prompt("Ingrese el lado del cuadrado: ");
      alert("El area del cuadrado es:" + ladocd * ladocd);
      break;
    case "rectangulo":
      let baseR = prompt("Ingrese la base del rectangulo: ");
      let altR = prompt("Ingrese la altura del rectangulo: ");
      //El alert no concatena comas usa el +
      alert("El area del rectangulo es:" + baseR * altR);
      break;
    default:
      let entradaInvalida = prompt(
        "No existe esa entrada desea un ingresar una nueva Y/N: ",
      );
      if (entradaInvalida.toUpperCase() === "Y") {
        ingresoDatos();
      } else {
        alert("Un placer ayudar, hasta luego");
      }
  }
}

ingresoDatos();
