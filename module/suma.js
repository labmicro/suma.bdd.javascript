exports.acumular = (acumulador, operando) => {
    var suma = acumulador + operando;
    return {acumulador: suma, error: 0};
}

