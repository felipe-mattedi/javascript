const readline = require('readline-sync')

// Funções
// 1
// Faça uma função que recebe um número e imprime seu dobro.
let numero = parseInt(readline.question('Digite um numero: '))
if (isNaN(numero)){
  console.log('Digite um numero valido')
}
else{
  console.log(dobro(numero))
}

function dobro(numero){
  return numero*2
}

// 2
// Faça uma função que recebe o valor do raio de um círculo e retorna o valor do comprimento de sua circunferência: C = 2pir.

let numero = parseFloat(readline.question('Digite o raio do circulo: '))
if (isNaN(numero)){
  console.log('Digite um numero valido')
}
else{
  console.log(circunferencia(numero))
}

function circunferencia(numero){
  return (2*Math.PI*numero)
}

// 3
// Faça uma função para cada operação matemática básica (soma, subtração, multiplicação e divisão). As funções devem receber dois números e retornar o resultado da operação.

let numero = parseInt(readline.question('Digite o primeiro operador: '))
let numero2 = parseInt(readline.question('Digite o segundo operador: '))

if (isNaN(numero) || isNaN(numero2)){
  console.log('Digite um numero valido')
}

else{
  
  let operacao = readline.question('Digite a operacao: ')
  switch(operacao){
    case "soma":
      console.log(soma(numero,numero2))
      break

    case "subtracao":
      console.log(subtracao(numero,numero2))
      break

    case "multiplicacao":
      console.log(multiplicacao(numero,numero2))
      break


    case "divisao":
      console.log(divisao(numero,numero2))
      break

    default:
      console.log("Operacao Invalida")

  }

}

function soma(a,b){
  return (a+b)
}

function subtracao(a,b){
  return (a-b)
}

function multiplicacao(a,b){
  return (a*b)
}

function divisao(a,b){
  return (a/b)
}


// 4
// Faça uma função que recebe um nome e imprime “olá, [nome]”.
let nome = readline.question('Digite um nome: ')
hello(nome)

function hello(entrada){
  console.log('ola, ' + entrada)
}


// 5
// Faça uma função que recebe um nome e um horário e imprime “Bom dia, [nome]”, caso seja antes de 12h, “Boa Tarde, [nome]”, caso seja entre 12h e 18h e “Boa noite, [nome]” se for após às 18h.

let nome = readline.question('Digite um nome: ')
let horario = parseInt(readline.question('Digite um horario entre 00 e 23: '))

if(horario >= 0 && horario <= 23){
  saudacao(nome, horario)

}
else {
  console.log('Horario Invalido')
}

function saudacao(nome, horario){
  if (horario < 12){
    console.log('Bom dia, ' + nome)
  }

  else if(horario < 18){
    console.log('Boa Tarde ' + nome)
  }

  else{
    console.log('Boa Noite, ' + nome)
  }
}

// 6
// Faça uma função que recebe um número e retorna true se ele é par ou false, se ele é ímpar.

let numero = parseFloat(readline.question('Digite um numero: '))
if (isNaN(numero)){
  console.log('Digite um numero valido')
}
else{
  ehparouimpar(numero)
}

function ehparouimpar(numero){
  if(numero%2 == 0){
    console.log(numero + ' eh um numero par')
  }

  else{
    console.log(numero + ' eh um numero impar')
  }
}

// 7
// Faça uma função que sorteia 10 números aleatórios entre 0 e 100 e retorna o maior entre eles.


sorteio()

function sorteio(){
  let numeros = []
  let maximo = 0
  for (let i = 0; i < 10; i++){
    let sorteado = parseInt(Math.random()*100)
    if (sorteado > maximo){
      maximo = sorteado
    }
    numeros.push(sorteado)
  }
  console.log('Os numeros sorteados sao ' + numeros + ' e o maior deles eh ' + maximo)
}

// 8
// Faça uma função que recebe um número n de entrada, sorteia n números aleatórios entre 0 e 100 e retorna a média deles.

let n = parseFloat(readline.question('Digite um numero: '))
if (isNaN(n)){
  console.log('Digite um numero valido')
}
else{

sorteio(n)
}

function sorteio(n){
  let numeros = []
  let soma = 0
  for (let i = 0; i < n; i++){
    let sorteado = parseInt(Math.random()*100)
    soma = soma + sorteado
    numeros.push(sorteado)
  }
  let media = soma/n
  console.log('Os numeros sorteados sao ' + numeros + ' e a media deles eh ' + media)
}

// 9
// Faça uma função que recebe um vetor de palavras e retorna um vetor contendo as mesmas palavras do vetor anterior, porém escritas em caixa alta.

vetor= ['abacaxi','melancia','melao','limao','morango']
console.log(vetor)
console.log(emcaixaalta(vetor))


function emcaixaalta(vetor){
  let vetorn=[]
  for(n in vetor){
    vetorn.push(vetor[n].toUpperCase())
  }
  return vetorn
}

// 10
// Faça uma função que recebe dois vetores e retorna a soma item a item desses vetores.
// Exemplo: Se a função receber os vetores [1,4,3] e [3,5,1], então a função deve retornar [1+3, 4+5, 3+1] = [4, 9, 4].

let vetor1 = [2,6,54,67,1,12,24]
let vetor2 = [63,5,67,89]

console.log(somavetores(vetor2,vetor1))

function somavetores(a,b){
  vetorsoma = []
  let tam1 = a.length
  let tam2 = b.length

  let posicao = 0
  if(tam2<tam1){
    for(posicao ; posicao < tam2; posicao++){
      vetorsoma.push(a[posicao]+b[posicao])
    }
    for(posicao ; posicao < tam1; posicao++){
      vetorsoma.push(a[posicao])
    }
  }
  
  else {
    for(posicao ; posicao < tam1; posicao++){
      vetorsoma.push(a[posicao]+b[posicao])
    }
    for(posicao ; posicao < tam2; posicao++){
      vetorsoma.push(b[posicao])
    }
  }
  return vetorsoma

}



// 11
// Faça uma função que receba dois vetores e retorne o produto item a item desses vetores.
// Exemplo: Se a função receber os vetores [1,4,3] e [3,5,1], então a função deve retornar [1x3, 4x5, 3x1] = [3, 20, 3].


let vetor1 = [2,6,54,67,1,12,24]
let vetor2 = [63,5,67,89]

console.log(somavetores(vetor2,vetor1))

function somavetores(a,b){
  vetorsoma = []
  let tam1 = a.length
  let tam2 = b.length

  let posicao = 0
  if(tam2<tam1){
    for(posicao ; posicao < tam2; posicao++){
      vetorsoma.push(a[posicao]*b[posicao])
    }
    for(posicao ; posicao < tam1; posicao++){
      vetorsoma.push(a[posicao])
    }
  }
  
  else {
    for(posicao ; posicao < tam1; posicao++){
      vetorsoma.push(a[posicao]*b[posicao])
    }
    for(posicao ; posicao < tam2; posicao++){
      vetorsoma.push(b[posicao])
    }
  }
  return vetorsoma

}


// 12
// Faça uma função que recebe um número x e um vetor numérica e retorna um vetor cujos elementos são os itens do vetor de entrada multiplicado por x.

// Exemplo:

// Se a função receber o número 5 e o vetor [3,5,1], então a função deve retornar [5x3, 5x5, 5x1] = [15, 25, 5].

let vetor1 = [2,6,54,67,1,12,24]
let n = parseInt(readline.question('Digite um numero: '))
if (isNaN(n)){
  console.log('Digite um numero valido')
}
else{

 console.log(multiplicavetor(n, vetor1))
}

function multiplicavetor(n,vetor){
  let mult=[]
  for (x in vetor){
    mult.push(n*vetor[x])
  }
  return mult

}

// 13
// Faça uma função que recebe um vetor de números e retorna a soma dos elementos desse vetor.

let vetor1 = [2,6,54,67,1,12,24]


console.log(somaelementos(vetor1))


function somaelementos(vetor){
  let soma = 0
  for (x in vetor){
    soma = soma + vetor[x]
  }
  return soma

}

// 14
// Faça uma função que recebe um vetor de números e retorna a média aritmética dos elementos desse vetor.

let vetor1 = [2,6,54,67,1,12,24]


console.log('A media dos elementos eh ' + mediaelementos(vetor1))


function mediaelementos(vetor){
  let soma = 0
  for (x in vetor){
    soma = soma + vetor[x]
  }
  return (Math.ceil(soma/vetor.length))
}


// 15
// Faça uma função que recebe um número e retorna o número invertido.
// Exemplo x = 32243;
// Saída esperada: 34223


let n = readline.question('Digite um numero: ')
if (isNaN(parseInt(n))){
  console.log('Digite um numero valido')
}
else{
 console.log(invertenumero(n))
}

function invertenumero(n){
   var invertido = ''
   for(k in n){
     invertido = n[k].concat(invertido)
   }
   return invertido
}


// 16
// Faça uma função que recebe uma string como parâmetro e converte a primeira letra de cada palavra para maiúsculo.

// Exemplo: ‘the quick brown fox’
// Saída esperada: ‘The Quick Brown Fox’

let frase = readline.question('Digite uma frase: ')

console.log(maiusculo(frase))

function maiusculo(entrada){
   var frasenova = ''
   var n = 0
   frasenova = frasenova.concat(entrada[n].toUpperCase())
   var tamanho = entrada.length
   n++

   for (n ; n < tamanho ; n++) {
     if(entrada[n-1] == ' '){
      frasenova = frasenova.concat(entrada[n].toUpperCase())
     }

     else{
      frasenova = frasenova.concat(entrada[n])
     }

    }

    return frasenova
  }



// 17
// Faça uma função que recebe um número e retorna um booleano representando se ele é primo ou não.

let n = readline.question('Digite um numero: ')
if (isNaN(parseInt(n))){
  console.log('Digite um numero valido')
}
else{
 console.log(ehprimo(n))
}

function ehprimo(n){

  var resultado = true
  var k = 2

  for (k ; k < n ; k++){
    if(n%k == 0){
      resultado = false
    }
}
  return resultado

}

// 18
// Faça uma função que recebe um argumento e retorna o seu tipo de dado (number, string, etc).

let algo = 2

console.log('Isso eh do tipo ' + oqueeh(algo))

function oqueeh(n){
  
  return typeof(n)

}

// 19
// Faça um função que recebe um vetor de números e encontre o segundo menor e o segundo maior número, respectivamente.

// Exemplo: [1,2,3,4,5]
// Saída esperada: 2,4

let vetor1 = [2, 65, 7, 41, 96, 23, 13, 12, 70, 101]

console.log(segundos(vetor1))

function segundos(ordenado) {
var maior = 0
var menor = 0
var segmaior = 0
var segmenor = 0

for (n in ordenado){
  if(ordenado[n] > maior){
  segmaior = maior
  maior = ordenado[n] 
  }
  else if (ordenado[n] > segmaior){
  segmaior = ordenado[n]
  }
}

for (n in ordenado){
  if(ordenado[n] < menor || menor == 0 ){
  segmenor = menor
  menor = ordenado[n] 
  }
  else if (ordenado[n] < segmenor || segmenor == 0){
  segmenor = ordenado[n] 
  }
}
return [segmenor, segmaior]
}


// 20
// Faça uma função que recebe um vetor numérico e um número e retorne um vetor com os elementos de maiores que esse número.

let vetor1 = [2, 65, 7, 41, 96, 23, 13, 12, 70, 101]
let n = readline.question('Digite um numero: ')
if (isNaN(parseInt(n))){
  console.log('Digite um numero valido')
}
else{
 console.log(maiores(vetor1,n))
}

function maiores(vetor,n){
vetormaior = []
for (k in vetor){
  if (vetor[k] > n){
    vetormaior.push(vetor[k])
  }
}
  return vetormaior
}

// Desafio 1 -- FEITO
// Faça uma função que receba um número e calcule seu fatorial.

// Super Desafio!
// Repita o exercício anterior usando recursão, ou seja, uma função que chame ela mesma, lembrando que 3! = 32!, que 2! = 21!, que 1! = 1*0! e que 0! = 1.

// Desafio 2 - FEITO
// Faça uma função que recebe duas entradas: um input dado pelo usuário e um string que informa o tipo de dado (“idade”, “salário” ou “sexo”), e verifica se os dados digitados foram válidos, usando os seguintes critérios:

// a. Idade: entre 0 e 150;

// b. Salário: maior que 0;

// c. Sexo: M, F ou Outro.

// Desafio 3
// A sequência Fibonacci é a sequência cujos dois primeiros termos são 1 e os demais são obtidos através da soma de seus dois antecessores, isso é:

// a. Fibonacci(1) = 1 e Fibonacci(2) = 2;

// b. dado qualquer número n >= 3, Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)

// Assim, os 10 primeiros termos da sequência Fibonacci são:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
// Faça uma função que receba um número n e calcule o termo de número n da sequência Fibonacci.


let n = readline.question('Digite um numero para fibonacci: ')
if (isNaN(parseInt(n)) || parseInt(n) <= 0 ){
  console.log('Digite um numero valido e acima de 1')
}
else{
 console.log('O fibonacce de ' + n + ' é ' + fibonacci(n))
}

function fibonacci(numero){
  let proximo = 0
  let atual = 1
  let anteior = 0

  for(let k = 0; k < numero ; k++){
    proximo = atual + anterior
    anterior = atual
    atual = proximo
  }

    return proximo
}


function fibonaccirec( n ) {
  if( n < 1 || isNaN( n ) ) return;
  return n < 2 ? 'chirp' : chirp( n - 1 ) + '-chirp';
}
// Super Desafio!
// Refaça o desafio 3 usando recursão.

const readline = require('readline-sync')
let n = readline.question('Digite um numero para fibonacci: ')
if (isNaN(parseInt(n)) || parseInt(n) <= 0 ){
  console.log('Digite um numero valido e acima de 1')
}
else{
 console.log('O fibonacce de ' + n + ' é ' + fibonacci(n))
}

function fibonacci(numero){
  if (numero==0){
    return 1
  } 
  if (numero==-1){
    return 0
  }
    return (fibonacci(numero-1) + fibonacci(numero-2))

}