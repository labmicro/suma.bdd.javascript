exports.acumular = (acumulador, operando) => {
    const positivo = 0x7FFF;

    var suma = acumulador + operando;

    if (suma > positivo) {
        return {acumulador: positivo, error: 1};
    } else {
        return {acumulador: suma, error: 0};
    }
}

