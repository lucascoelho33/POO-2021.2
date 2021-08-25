const prompt = require('prompt-sync')()

const numero = Number(prompt('Digite um numero: '))
const antecessor = numero - 1
const sucessor = numero + 1

console.log('Numero: ', numero)
console.log('Antecessor: ', antecessor)
console.log('Sucessor: ', sucessor)