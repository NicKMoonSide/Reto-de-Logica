//Anagrama
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function Anagrama(palabra1, palabra2) {
  //Se declara la variable boolAnagrama para almacenar el resultado de la comparación
  let boolAnagrama = null;
  //Se comprueba antes de nada si las palabras tieenn la misma longitud y si son iguales
  if (palabra1.length !== palabra2.length) {
    return (boolAnagrama = false);
  } else if (palabra1.toLowerCase() === palabra2.toLowerCase()) {
    return (boolAnagrama = true);
  } else {
    /*
   //Dado que no se cumpla ningnua, hacemos masyuculas a las 2 palabras
    //y recorremos una palabra eliminando las letras en la segunda palabra
    //si al final queda la segunda palabra vacia es anagrama
   */
    let palabra1Mayus = palabra1.toLowerCase();
    let palabra2Mayus = palabra2.toLowerCase();
    for (const letra of palabra1Mayus) {
      palabra2Mayus = palabra2Mayus.replace(letra, "");
    }
    if (palabra2Mayus === "") {
      return (boolAnagrama = true);
    } else {
      return (boolAnagrama = false);
    }
  }
}
const palabra1 = prompt("Ingrese la primera palabra");
const palabra2 = prompt("Ingrese la segunda palabra");
const resultado = Anagrama(palabra1, palabra2);
alert(resultado);
