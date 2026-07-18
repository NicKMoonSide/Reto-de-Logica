//Contar palabras
/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function verificarIguales(indice, tamanioPalabra, texto, palabra) {
  const posibleIgual = texto.slice(indice, indice + tamanioPalabra);
  if (posibleIgual === palabra) return true;
}
/*
Para encontrar repetidos se recorre el texto, y cuando aparece la primera letra de la palabra 
que queremos encontrar se invoca a la funcion para que se adelante y compruebe si es o no la palabra
*/
function encontrarPalabra(texto, palabra) {
  // Se duplican las variables globales, y se las hace mayusculas
  const palabraLocal = palabra.toUpperCase();
  const textoLocal = texto.toUpperCase();
  const tamanioPalabra = palabraLocal.length;
  let palabraRepetida = 0;

  for (let i = 0; i < textoLocal.length; i = i + 1) {
    if (textoLocal[i] === palabraLocal[0]) {
      let comprobador = verificarIguales(
        i,
        tamanioPalabra,
        textoLocal,
        palabraLocal,
      );
      if (comprobador === true) {
        palabraRepetida = palabraRepetida + 1;
        i = i + tamanioPalabra;
      }
    }
  }
  return palabraRepetida;
}

const texto = prompt("Ingrese un parrafo: ");
const palabra = prompt("Ingrese la palabra que desea contar en el parrafo: ");
const Resultado = encontrarPalabra(texto, palabra);
alert(
  `La palabra "${palabra}" se repite ${Resultado} veces en el parrafo ingresado.`,
);
alert("Gracias por usar el programa.");
