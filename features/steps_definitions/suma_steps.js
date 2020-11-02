const { Before, Given, When, Then } = require('@cucumber/cucumber')
const expect = require("chai").expect;
const suma = require("../../module/suma.js");

let contexto = {};

When('efectuo una suma con saturacion de los valores {int} y {int}', function (acumulador, operando) {
    contexto.resultado = suma.acumular(acumulador, operando);
});

Then('no hay ningun truncamiento', function () {
    expect(contexto.resultado.error).to.be.equal(0);
});

Then('hay un truncamiento de numero positivo', function () {
    expect(contexto.resultado.error).to.be.equal(1);
});

Then('hay un truncamiento de numero negativo', function () {
    expect(contexto.resultado.error).to.be.equal(-1);
});

Then('el resultado de la suma es {int}', function (acumulado) {
    expect(contexto.resultado.acumulador).to.be.equal(acumulado);
});
