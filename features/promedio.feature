# language: es
# encoding: utf-8

Característica: Disponer de una funcion que promedie un vector de valores
    Como desarrollador de sistemas embebidos
    Quiero disponer de una libreria sencilla y confiable
    Para poder procesar señales digitales facilmente

Escenario: Promedio de valores sin saturacion
    Cuando calculo el promedio del vector [1,2,3]
    Entonces el promedio es valido
    Y el resultado del promedio es 2
