# language: es
# encoding: utf-8

Característica: Disponer de una funcion de suma con saturacion
    Como desarrollador de sistemas embebidos
    Quiero disponer de una libreria sencilla y confiable
    Para poder procesar señales digitales facilmente

Escenario: Suma normal sin saturacion
    Cuando efectuo una suma con saturacion de los valores 3 y 5
    Entonces no hay ningun truncamiento
    Y el resultado de la suma es 8
