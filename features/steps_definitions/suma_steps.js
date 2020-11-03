const { Before, Given, When, Then } = require('@cucumber/cucumber')
const expect = require("chai").expect;
const suma = require("../../module/suma.js");

let contexto = {};

When('efectuo una suma con saturacion de los valores {int} y {int}', function (acumulador, operando) {
    contexto.resultado = suma.acumular(acumulador, operando);
});

Then('la funcion suma devuelve el codigo de error {int}', function (error) {
    expect(contexto.resultado.error).to.be.equal(error);
});

Then('el resultado de la suma es {int}', function (acumulado) {
    expect(contexto.resultado.acumulador).to.be.equal(acumulado);
});
