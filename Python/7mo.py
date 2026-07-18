# Invirtir Cadenas
"""
/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */
"""


def invertir_string(palabra):
    num_chart = len(palabra)
    char = ""
    # El range empieza se detiene cuando i es menor a el stop, no cuando es menor o igual
    # por eso se pone el -1 en stop, y emepiza desde num_chat - 1, por que le numero de caracteres que conto
    # empexo desde 1 pero en indice del str empieza desde 0
    for i in range(num_chart - 1, -1, -1):
        char = char + palabra[i]
    return char


palabra = input("Ingrese una palabra: ")
palabra_invertida = invertir_string(palabra)
print(palabra_invertida)
