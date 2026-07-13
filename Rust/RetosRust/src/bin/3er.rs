//Fibonacci
/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
fn main() {
    /* Se usa el :u128 para idciar que se reserve un espacion de 128 bits sin signo para el numero
    en la serie de fibbonaci en el 45mo numero se supera el limere de los u32 bits que
     se dan automaticamente al declarar un numero mutable en rust y en la 48mo iteracion
     supera a u64
     */
    let mut sumador_previo: u128 = 0;
    let mut sumador_actual: u128 = 1; // Mutable. Sí puedes cambiar su valor después.
    let mut suma: u128;
    println!("Los 50 primeros números de la sucesión de Fibonacci son:");
    println!("0");
    println!("1");
    for _ in 1..=48 {
        /* Se guarda la suma en "suma"
        y se actualizan los valores despues  */
        suma = sumador_previo + sumador_actual;
        sumador_previo = sumador_actual;
        sumador_actual = suma;
        println!("{suma}");
    }
}
