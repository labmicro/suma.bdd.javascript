exports.acumular = (acumulador, operando) => {
    var suma = acumulador + operando;

    if (suma > 0x7FFF) {
        return {acumulador: positivo, error: 1};
    } else {
        return {acumulador: suma, error: 0};
    }
}

