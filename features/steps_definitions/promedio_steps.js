const { Before, Given, When, Then } = require('@cucumber/cucumber')
const expect = require("chai").expect;
const promedio = require("../../module/promedio.js");

let contexto = {};

When('calculo el promedio del vector', function (vector) {
    vector = vector.rawTable.flat().map(x => parseInt(x));
    contexto.resultado = promedio.promediar(vector);
});

Then('el promedio es valido', function () {
    expect(contexto.resultado.error).to.be.false;
});

Then('el promedio no es valido', function () {
    expect(contexto.resultado.error).to.be.true;
});

Then('el resultado del promedio es {int}', function (acumulado) {
    expect(contexto.resultado.promedio).to.be.equal(acumulado);
});