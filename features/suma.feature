# language: es
# encoding: utf-8

Característica: Disponer de una funcion de suma con saturacion
    Como desarrollador de sistemas embebidos
    Quiero disponer de una libreria sencilla y confiable
    Para poder procesar señales digitales facilmente

Esquema del escenario: Sumas con y sin saturacion
    Cuando efectuo una suma con saturacion de los valores <a> y <b>
    Entonces el resultado de la suma es <resultado>
    Y la funcion suma devuelve el codigo de error <error>
    Ejemplos:
    |    a   |  b | resultado | error |
    |    3   |  5 |     8     |   0   |
    |  32765 |  3 |   32767   |   1   |
    | -32766 | -3 |  -32768   |  -1   |
