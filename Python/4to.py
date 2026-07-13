# Numeros Primos
"""/*
* Escribe un programa que se encargue de comprobar si un número es o no primo.
* Hecho esto, imprime los números primos entre 1 y 100.
*/"""

import math


def verificar_primo(numero):
    ultimo_primo_comprobado = math.ceil(math.sqrt(numero))
    # Un numero primo debe ser divisible para 1 y para si mismo, pero siempre un numero es
    # Divisible para 1 asi que empezamos desde 2

    bandera = False
    for i in range(2, ultimo_primo_comprobado + 1):
        if numero % i == 0:
            bandera = True
            break
    if numero == 2:
        bandera = False
    if bandera:
        return "El número no es primo"
    else:
        return "El número es primo"


def primos_entre_1_y_100():
    # El ciclo recorre desde 2 porque 1 ya fue impreso, hasta 100
    for j in range(2, 101):
        if verificar_primo(j) == "El número es primo":
            print(j)


while True:
    try:
        numero = int(input("Ingrese un número: "))
        # Para comparar tipos de usa el is not como analogo del != en numeros
        if numero < 0 or type(numero) is not int:
            raise ValueError
        else:
            print(verificar_primo(numero))
            print("Los números primos entre 1 y 100 son: ")
            primos_entre_1_y_100()
            break
    except ValueError:
        print(
            "El valor ingresado no es valido, por favor ingrese un número entero mayor que 0"
        )
