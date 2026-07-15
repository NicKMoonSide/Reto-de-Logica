//AspectRatio
/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */
use image::ImageReader;
use num_integer::gcd;
use std::io::Cursor; // "gdc" significa greatest common divisor 

fn aspect_ratio(ancho: u32, alto: u32) -> (u32, u32) {
    // 1. MCD de dos números

    let maximo_comun_d: u32 = gcd(ancho, alto);
    let asp_ancho = ancho / maximo_comun_d;
    let asp_alto = alto / maximo_comun_d;
    (asp_ancho, asp_alto)
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    //async main se refiere a una función principal asíncrona,
    //lo que significa que puede realizar operaciones de entrada/salida sin bloquear el hilo principal.
    // Esto es útil para tareas como descargar datos de una URL.
    // 1. La URL de la imagen que quieres consultar
    let url = "https://rustfoundation.org/wp-content/uploads/2024/07/rf%E2%80%93logo-primary-rust-1-300x217.png";

    // 2. Descargar los bytes de la URL usando reqwest
    let bytes = reqwest::get(url).await?.bytes().await?;

    // 3. Crear un Cursor para que la librería de imágenes pueda leer los bytes en memoria
    let cursor = Cursor::new(bytes);

    // 4. Adivinar el formato (PNG, JPEG, etc.) y obtener las dimensiones
    let reader = ImageReader::new(cursor).with_guessed_format()?;
    let (ancho, alto) = reader.into_dimensions()?;

    println!("Dimensiones de la imagen:");
    println!("Ancho: {} píxeles", ancho);
    println!("Alto: {} píxeles", alto);

    let (ancho_r, alto_r) = aspect_ratio(ancho, alto);
    println!("Aspect Ratio: {}:{}", ancho_r, alto_r);
    Ok(())
}
