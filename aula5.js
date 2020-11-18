const readline = require('readline-sync')

// Vetores e For Loop
// 1
// Crie um vetor qualquer e faça um programa que imprima cada elemento do vetor usando o for.

vetor = [2,4,6,8,10,12,14,16,18,20,22,24,26]

for(let i = 0; i < vetor.length ; i++)
{
  console.log('O valor que está no vetor é ' + vetor[i])
}

// 2
// Faça um programa que imprima todos os itens de um vetor usando while e compare com o exercício 1.

vetor = [2,4,6,8,10,12,14,16,18,20,22,24,26]

let i = 0
while(i < vetor.length)
{
  console.log('O valor que está no vetor é ' + vetor[i])
  i++
}

// 3
// Faça um programa que peça para o usuário digitar um número n e imprima um vetor com todos os números de 0 a n-1.
// Exemplo: se o usuário digitar 5, o programa deve imprimir [0, 1, 2, 3, 4]

let entrada = parseInt(readline.question('Digite um numero: '))

vetor=[]

for(let numero = entrada-1 ; numero >= 0 ;numero--){
    vetor.unshift(numero)
}

console.log('O vetor dgerado eh ' + vetor)

// 4
// Faça um programa que olhe todos os itens de um vetor e diga quantos deles são pares.

vetor = [2,4,6,8,10,12,13,14,16,18,20,21,22,24,26,33,35,40]
let pares = 0

for(let num in vetor){
  if((vetor[num]%2) == 0){
    pares ++
  }
}

  console.log('A quantidade de numeros pares do vetor eh ' + pares)

// 5
// Faça um programa que imprima o maior número de um vetor.

vetor = [2,4,6,8,10,12,13,14,16,18,20,21,22,24,26,33,35,40,85,3,5,7,23,51,48,60,-87]
let maior = 0

for(let num in vetor){

  if(vetor[num] > maior){
    maior = vetor[num]
  }
}

console.log('O maior numero do vetor eh ' + maior)

// 6
// Faça um programa que, dadas dois vetores de mesmo tamanho, crie um novo vetor com cada elemento igual a soma dos elementos do vetor 1 com os do vetor 2, na mesma posição.

// Exemplo:

// Dadas vetor1 = [1, 4, 5] e vetor2 = [2, 2, 3], então vetor3 = [1+2, 4+2, 5+3] = [3, 6, 8]

let vetor1 = [2,4,6,8,10,12,13]
let vetor2 = [22,24,26,33,35,40,85]
let vetor3=[]

for(let num in vetor1){
  vetor3.push(vetor1[num]+vetor2[num])
}

console.log('O vetor soma eh ' + vetor3)

// 7
// Faça um programa que dados dois vetores de mesmo tamanho, imprima o produto escalar entre eles.
// OBS: produto escalar é a soma do resultado da multiplicação entre o número na posição i do vetor1 pelo número na posição i do vetor2.

vetor1 = [2,4,6,8,10,12,13]
vetor2 = [22,24,26,33,35,40,85]
let produto = 0

for(let num in vetor1){
  produto = produto + (vetor1[num]*vetor2[num])
}

console.log('O produto escalar eh ' + produto)

// 8
// Faça um programa que pede para o usuário digitar 5 números e, ao final, imprime um vetor com os 5 números digitados pelo usuário (sem converter os números para o tipo number).

// Exemplo: Se o usuário digitar 1, 5, 2, 3, 6, o programa deve imprimir o vetor [‘1’,‘5’,‘2’,‘3’,‘6’]


vetor = []
k = 0
console.log('Voce vai digitar 5 numeros: ')

do{

numero = readline.question('Digite um numero ')

if(isNaN(parseInt(numero))){
  console.log('Isto não é um numero')
}
else{
  vetor.push(numero)
  k++
}

} while(k<5)
console.log('O vetor correspondente eh ' + vetor)


// 9
// Pegue a lista gerada no exercício anterior e transforme cada um dos itens desse vetor em um number.
// OBS: Não é para alterar o programa anterior, mas sim o vetor gerado por ele.


vetor = []
k = 0
console.log('Voce vai digitar 5 numeros: ')

do{

numero = readline.question('Digite um numero ')

if(isNaN(parseInt(numero))){
  console.log('Isto não é um numero')
}
else{
  vetor.push(parseInt(numero))
  k++
}

} while(k<5)
console.log('O vetor correspondente eh ' + vetor)


// 10
// Faça um programa que peça as 4 notas bimestrais e mostre a média aritmética delas, usando vetores.
vetor = []
k = 0
let soma =  0

do{

  numero = readline.question('Digite a nota ')
  nota = parseFloat(numero)
  
  if(isNaN(nota)){
    console.log('Isto não é uma nota')
  }
  else{
    vetor.push(nota)
    soma = soma + nota
    k++
  }
  
  } while(k<4)

  let media = soma / 4
  console.log('As notas sao  ' + vetor + ' e a média eh ' + media)


// 11
// Sorteie um vetor de 10 números e imprima:

vetor = [20,45,1,69,125,14,15,200,36,8]

// a. um vetor com os 4 primeiros números;

vetor1 = vetor.splice(0,4)
console.log('Os quatro primeiros são: ' + vetor1)

// b. um vetor com os 5 últimos números;

vetor = [20,45,1,69,125,14,15,200,36,8]

let tamanho = vetor.length-5
vetor1 = vetor.splice(tamanho,5)
console.log('Os cinco ultimos são: ' + vetor1)

// c. um vetor contendo apenas os elementos das posições pares;

vetor = [20,45,1,69,125,14,15,200,36,8]

vetor1=[]
for(let num in vetor){
  if(num%2 == 0){
    vetor1.push(vetor[num])
  }

}
console.log('O vetor das posicoes pares eh ' + vetor1)

// d. um vetor contendo apenas os elementos das posições ímpares;

vetor = [20,45,1,69,125,14,15,200,36,8]

vetor1=[]
for(let num in vetor){
  if(num%2 != 0){
    vetor1.push(vetor[num])
  }

}
console.log('O vetor das posicoes impares eh ' + vetor1)

// e. um vetor inverso do vetor sorteado (isto é, um vetor que começa com o último elemento o vetor sorteado e termina com o primeiro);

vetor = [20,45,1,69,125,14,15,200,36,8]

vetor1=[]
for(let num in vetor){
    vetor1.unshift(vetor[num])
  }

  console.log('O vetor inverso eh ' + vetor1)

// f. um vetor inverso dos 5 primeiros números;

vetor = [20,45,1,69,125,14,15,200,36,8]

vetor1=[]
for(let k = 0; k < 5; k++){
    vetor1.unshift(vetor[k])
  }

  console.log('O vetor inverso dos 5 primeiros eh ' + vetor1)

// g. um vetor inverso dos 5 últimos números.

vetor = [20,45,1,69,125,14,15,200,36,8]

vetor1=[]
let k = vetor.length-5
for(k ; k <= vetor.length-1; k++){
    vetor1.unshift(vetor[k])
  }

  console.log('O vetor inverso dos 5 ultimos eh ' + vetor1)

// 12
// Faça um programa que sorteia 10 números entre 0 e 100 e conte quantos números sorteados são maiores que 50.

vetor=[]
let conta = 0
for(let n = 0 ; n < 10 ; n++){
  let sorteio = Math.round(Math.random()*100)
  vetor.push(sorteio)
  if (sorteio > 50){
    conta++
  }
}

  console.log('Os numero sorteados sao: ' + vetor + ' e temos ' + conta + ' numeros maiores que 50')


// 13
// Faça um programa que sorteie 10 números entre 0 e 100 e imprima:

vetor=[]
let maior = 0
let menor = 0
let soma = 0
for(let n = 0 ; n < 10 ; n++){
  let sorteio = Math.round(Math.random()*100)
  vetor.push(sorteio)
  if (sorteio > maior){
    maior = sorteio
  }
  else if(sorteio < menor || menor == 0){
  menor = sorteio }

  soma = soma + sorteio
}
  let media = soma/10

  console.log ('Numeros sorteados ' + vetor)

// a. o maior número sorteado;

  console.log('O maior numero sorteado eh ' + maior)

// b. o menor número sorteado;
  
  console.log('O menor numero sorteado eh ' + menor)

// c. a média dos números sorteados;

console.log('A media dos numero sorteados eh ' + media)

// d. a soma dos números sorteados.


console.log('A soma dos numero sorteados eh ' + soma)


// 14
// Desafio 1 - Faça um programa que peça para o usuário digitar o nome e a idade de um aluno e o número de provas que esse aluno fez. Depois, o programa deve pedir para o usuário digitar as notas de cada prova do aluno. Ao final o programa deve imprimir um vetor contendo:


// a. Nome do aluno na posição 0;

// b. Idade do aluno na posição 1;

// c. Um vetor com todas as notas na posição 2;

// d. A média do aluno na posição 3;

// e. true ou talse, caso a média seja maior que 5 ou não, na posição 4.

// Dica: Use o que você fez nos exercícios anteriores para criar esse programa.

vetor=[]

console.log('---- PROGRAMA DE NOTAS ----')
let nomealuno = readline.question('Digite o nome do aluno: ')
vetor.push(nomealuno)

while(true){
  let idade = parseInt(readline.question('Digite a idade: '))
  if(isNaN(idade)){
    console.log('Digite um numero')
  }
  else{
    vetor.push(idade)
    break
  }
}

while(true){
  var numeroprovas = parseInt(readline.question('Digite a quantidade de provas: '))
  if(isNaN(numeroprovas)){
    console.log('Digite um numero')
  }
  else{
    break
  }
}

let somanotas = 0
let vetornotas=[]
for(let k = 0; k<numeroprovas; k++){

  while(true){
    let nota = parseFloat(readline.question('Digite a nota da prova ' + parseInt(k+1) + ' : '))
    if(isNaN(nota)){
      console.log('Digite um numero')
    }
    else{
      vetornotas.push(nota)
      somanotas = somanotas + nota
      break
    }
  }
}
vetor.push(vetornotas)

let medianotas = parseFloat(somanotas / numeroprovas).toFixed(2)

vetor.push(medianotas)

if (medianotas>5){
  vetor.push(true)
}
else{
  vetor.push(false)
}

console.log('O vetor final de notas eh ' + vetor)

// 15
// Desafio 2 - Faça um programa como o do item anterior, porém que imprima a média sem considerar a maior e menor nota do aluno (nesse caso o número de provas precisa ser obrigatoriamente maior que dois).

// Dica: crie uma cópia com o vetor de todas as notas antes de fazer a média.

vetor=[]

console.log('---- PROGRAMA DE NOTAS ----')
let nomealuno = readline.question('Digite o nome do aluno: ')
vetor.push(nomealuno)

while(true){
  let idade = parseInt(readline.question('Digite a idade: '))
  if(isNaN(idade)){
    console.log('Digite um numero')
  }
  else{
    vetor.push(idade)
    break
  }
}

while(true){
  var numeroprovas = parseInt(readline.question('Digite a quantidade de provas: '))
  if(isNaN(numeroprovas) || numeroprovas <= 2){
    console.log('Digite um numero maior que 2')
  }
  else{
    break
  }
}

let somanotas = 0
let maiornota = 0
let menornota = 0
let vetornotas=[]
for(let k = 0; k<numeroprovas; k++){

  while(true){
    let nota = parseFloat(readline.question('Digite a nota da prova ' + parseInt(k+1) + ' : '))
    if(isNaN(nota)){
      console.log('Digite um numero')
    }
    else if(nota > maiornota) {
      maiornota = nota
      vetornotas.push(nota)
      break
    }
    else if(nota < menornota || menornota == 0) {
      menornota = nota
      vetornotas.push(nota)
      break
    }
    else{
      vetornotas.push(nota)
      break
    }
  }
}
vetor.push(vetornotas)
vetor.pop(vetor.includes(maiornota))
vetor.pop(vetor.includes(menornota))


let medianotas = parseFloat(somanotas / (numeroprovas-2)).toFixed(2)

vetor.push(medianotas)

if (medianotas>5){
  vetor.push(true)
}
else{
  vetor.push(false)
}

console.log('O vetor final de notas eh ' + vetor)

// 16
// Desafio 3 - Faça um programa que pede para o usuário digitar o CPF e verifica se ele é válido. Para isso, primeiramente o programa deve multiplicar cada um dos 9 primeiros dígitos do CPF pelos números de 10 a 2 e somar todas as respostas. O resultado deve ser multiplicado por 10 e dividido por 11. O resto dessa divisão deve ser igual ao primeiro dígito verificador (10º dígito). Em seguida, o programa deve multiplicar cada um dos 10 primeiros dígitos do CPF pelos números de 11 a 2 e repetir o procedimento anterior para verificar o segundo dígito verificador.

// Exemplo:

// Se o CPF for 286.255.878-87 o programa deve fazer primeiro:

// x = (210 + 89 + 68 + 27 + 56 + 55 + 84 + 73 + 8*2)

// Em seguida, o programa deve testar se x*10%11 == 8 (o décimo número do CPF). Se sim, o programa deve calcular:

// x = (211 + 810 + 69 + 28 + 57 + 56 + 85 + 74 + 83 + 82)

// e verificar se x*10%11 == 7 (o décimo primeiro número do CPF).

let estados={"0": "RS", "1": "DF, GO, MT, MS, TO", "2": "AM, PA, RR, AP, AC, RO", "3": "CE, MA, PI", "4": "PB, PE, AL, RN", "5": "BA, SE", "6": "MG", "7": "RJ, ES", "8": "SP", "9": "PR, SC"}
let CPF = (readline.question('Digite o CPF: '))
let soma = 0
for(let k = 0; k < 9 ; k++){
  soma = soma + (CPF[k]*(10-k))
}
let decimo = ((soma*10)%11)

if(decimo == 10){
  decimo = 0
}

if(CPF[9] == decimo){
  CPF.concat(decimo)
  let soma = 0
    for(let k = 0; k < 10 ; k++){
    soma = soma + (CPF[k]*(11-k))
    }
      let onze = (soma*10)%11
      if(decimo == 10){
        decimo = 0
      }      
      if(CPF[10] == onze){
        console.log('CPF VALIDO E O ESTADO É ' + estados[CPF[8]])
      }

      else{
        console.log('CPF INVALIDO')
      }
}

else{
  console.log('CPF INVALIDO')
}



