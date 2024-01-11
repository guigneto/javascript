


// Faca um programa para calcular o valor de uma viagem
// Voce tera 3 variaveis sendo elas:
// 1 - preco do combustivel
// 2 - gasto medio de combustivel por KM
// 3 - distancia em KM da viagem

// Imprima no console o valor que será gasto para realizar a viagem



const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2))
