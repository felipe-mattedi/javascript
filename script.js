console.log("Ola");

// var = declarando como var o escopo da variável torna-se global. Não respeita escopo.
// let = respeita o escopo.
// const = constante. não pode mudar
// javascrip define tipo sozinho. quando não sabe é undefined.
// parse = pegar esse texto e representar com alguma coisa.
// parseInt, parseFloat
// comparações  == identico em valor    === identico em valor e tipo 
// Funções matemáticas Math.pow(2,3) -> potência   Math.floor -> joga pra baixo Math.ceil -> joga pra cima

// npm gerenciador de repositórios. -> para instalar pacotes




 felipe = true
 console.log(typeof(felipe))
 console.log(felipe)
 let soma = function(a,b){return a+b}

 console.log(soma(5,4))

 let vetor = [1,2,3];
 let objeto = {numero: 23}
 console.log(objeto.numero)
 console.log(soma(5,4))
 console.log(soma(5,4))
 console.log(soma(5,4))

 // condições


 let numero = 6
 if(numero == 3){

  console.log('o numero era 3')

 }

 else if (numero == 4){

  console.log('o numero era 4')

 }

 else{
 console.log('o numero nao era 3')


 }
 
 //operador ternario. Teste .. se verdadeiro depois e se falso ..
 // operador && AND || AND
 
let paridade = numero % 2 ? 'impar' : 'par'

console.log(paridade)

// lista de exercicios

let felipe2 ="felipe"

console.log("felipe2 é do tipo " + typeof(felipe2))

felipe2 = 2

console.log("felipe2 é do tipo " + typeof(felipe2))

let compara = (14 <= 14)
console.log('O valor de compara é ' + compara )

compara = (14 < 14)
console.log('O valor de compara é ' + compara )

compara = (-9 > -25)
console.log('O valor de compara é ' + compara )

compara = (-25 > -9)
console.log('O valor de compara é ' + compara )

let idade_entrada = 5

if (idade_entrada < 12){

  console.log('é Criança')
  idade_entrada = 1
}

else if (idade_entrada < 18){

  console.log('é Adolescente')
  idade_entrada = 2
}

else if (idade_entrada <= 60){

  console.log('é Adulto')
  idade_entrada = 3
}

else{

  console.log('é Idoso')
}

switch (idade_entrada)
{
    case 1:
    console.log('é Criança')
    break
  
    case 2:
    console.log('é Adolescente')
    break

    case 3:
    console.log('é Adulto')
    break

    default:
    console.log('é Idoso')

}

const readline = require('readline-sync')  // necessario colocar a biblioteca importada em uma variável
let entrada = parseFloat(readline.question('Digite Aqui: '))
console.log(entrada)
console.log(typeof(entrada))

// Não existe o tipo float
// Sim, tanto faz o tipo de aspas
// é falso, se vc usar para armazenar outra coisa ela vai armazenar e alterar de tipo dinamicamete
// "be" não cria constante
// alternativa D
// alternativa D
// alternativa C
// alternativa B

// Estruturas de repetição
// break = sai do loop

let valor = 0

while (valor <= 10){
  console.log('o número atual é ' + valor)
  valor++

}

valor = 0

do{
  console.log('o número atual é ' + valor)
  valor++
}
while(valor <= 10)