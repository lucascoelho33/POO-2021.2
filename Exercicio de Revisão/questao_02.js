const prompt = require('prompt-sync')()

const dolar = Number(prompt('Digite o valor do dólar atual: '))
const valor_dolar = Number(prompt('Digite um valor em dólar: '))

const valor_real = valor_dolar * dolar

console.log(`O valor em reais é  ${valor_real.toFixed(2)}`)
