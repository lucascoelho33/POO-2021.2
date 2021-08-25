const prompt = require('prompt-sync')()

const valor1 = Number(prompt('Digite o primeiro valor: '))
const valor2 = Number(prompt('Digite o segundo valor: '))
const valor3 = Number(prompt('Digite o terceiro valor: '))

if (valor1 < valor2 && valor1 < valor3) {
    console.log('O primeiro valor é o menor')
} else if (valor2 < valor1 && valor2 < valor3) {
    console.log('O segundo valor é o menor')
} else if (valor3 < valor1 && valor3 < valor2) {
    console.log('O terceiro valor é o menor')
}