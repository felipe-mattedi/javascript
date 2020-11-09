const readline = require('readline-sync')

// 1 - Faça um programa que peça as 4 notas bimestrais de um aluno e mostre a média aritmética delas.

let nota1 = parseFloat(readline.question('Digite a nota 1: '))
let nota2 = parseFloat(readline.question('Digite a nota 2: '))
let nota3 = parseFloat(readline.question('Digite a nota 3: '))
let nota4 = parseFloat(readline.question('Digite a nota 4: '))
let media = (nota1+nota2+nota3+nota4)/4

console.log('A média das notas é ' + media)

// 2. Faça um programa que peça o raio de um círculo, calcule e mostre sua área.

let raio = parseFloat(readline.question('Digite o raio do círculo: '))
let area = Math.PI * Math.pow(raio,2)

console.log('A área do circulo é ' + area)

// 3.Faça um programa que peça a temperatura em graus Fahrenheit (F), transforme e mostre a temperatura em graus Celsius (°C).

let far = parseFloat(readline.question('Digite a temperatura em Fahrenheit: '))
let cel = (5 * (far - 32)/9)

console.log('A temperatura é ' + cel +'ºC')

cel = parseFloat(readline.question('Digite a temperatura em celsius: '))
far = ( 9 * cel)/5 + 32

console.log('A temperatura é ' + far +'ºF')

//### 4. Faça um programa que peça 2 números inteiros e um número real, calcule e mostre:

// - o produto do dobro do primeiro com metade do segundo.
// - a soma do triplo do primeiro com o terceiro.
// - o terceiro elevado ao cubo.

let num1 = parseInt(readline.question('Digite um número inteiro: '))
let num2 = parseInt(readline.question('Digite outro número inteiro: '))
let num3 = parseFloat(readline.question('Digite um número real: '))

let prim = parseFloat(((2*num1)*(num2/2)))
let sec = parseFloat(((3*num1) + num3))
let terc = parseFloat(Math.pow(num3,3))

console.log('o produto do dobro do primeiro com metade do segundo é ' + prim)
console.log('a soma do triplo do primeiro com o terceiro é ' + sec)
console.log('o terceiro elevado ao cubo é ' + terc)

// Faça um programa que peça o peso e altura de uma pessoa e calcule seu IMC (Índice de Massa Corporal).

let peso = parseFloat(readline.question('Digite seu peso: '))

let altura = parseFloat(readline.question('Digite sua altura: '))

imc = peso/Math.pow(altura,2)

console.log('O seu IMC é ' + imc)


//  Faça um programa que peça um valor monetário e aumente-o em 15%. Seu programa deve imprimir a mensagem “O novo valor é R$[valor]”.

let valor = parseFloat(readline.question('Digite um valor monetário: '))
console.log('O novo valor é R$ ' + valor*1.15)

// Crie um programa em JS que informe a data de hoje para o usuário. Ex.: 09/11/2020.


let data = new Date()

console.log('A data de hoje é ' + data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())

