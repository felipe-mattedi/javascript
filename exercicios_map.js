const input = require('readline-sync')

// Questão 1

const valor_real = [100, 214, 2150, 300, 459, 600, 715, 705, 110, 95]

const valor_com_desconto = valor_real.map(valor => {
  if (valor < 200) return valor*0.95
  else if(valor < 400) return valor*0.9
  else if(valor < 2000) return valor*0.85
  else return valor*.8
})

console.log('Valores sem desconto ' + valor_real)
console.log('Valores com desconto ' + valor_com_desconto)

// Questão 2

var vetor_1 = []
var vetor_2 = []
var retorno = []

do{
  retorno = cria_vetor(1,vetor_1)
}
while(retorno[0])
vetor_1 = retorno[1]

do{
  retorno = cria_vetor(2,vetor_2)
}
while(retorno[0])
vetor_2 = retorno[1]

retorno = vetor_1.length >= vetor_2.length ? multiplicavetor(vetor_2, vetor_1) : multiplicavetor(vetor_1, vetor_2)

console.log('O Vetor multiplicado eh ' + retorno)

function multiplicavetor(vetor_menor, vetor_maior){

let vetor_mult = vetor_menor.map(function(x,index){
  return x*vetor_maior[index]
})

return vetor_mult

}

function cria_vetor(vetor_num, vetor){
  let numero = parseInt(input.question('Voce esta no vetor ' + vetor_num + ' .Digite um numero ou qualquer negativo/invalido para finalizar o vetor.'))

  if (isNaN(numero) || numero < 0){
    console.log('Finalizando Vetor ' + vetor_num)
    return [false, vetor]
  }
  else{
    vetor.push(numero)
    return [true, vetor]
  }
}

// Questão 3

var array20 = new Array(20).fill(0)

var array20_preenchido = array20.map(function(x){
  return (x+geranumero())
})

console.log('O array com numeros alteatorios eh ' + array20_preenchido)

function geranumero(){
  return Math.ceil((-10 + Math.random()*20))
}

// Questão 4

const people = [
  {
      name: "Angelina Jolie",
      age: 80,
      weight: 55,
      height: 1.79
  },
  {
      name: "Eric Jones",
      age: 28,
      weight: 100,
      height: 1.6
  },
  {
      name: "Paris Hilton",
      age: 34,
      weight: 79,
      height: 1.65
  },
  {
      name: "Kayne West",
      age: 26,
      weight: 83,
      height: 1.83
  },
  {
      name: "Bob Ziroll",
      age: 90,
      weight: 60,
      height: 1.65
  },
  {
    name: "Felipe Mattedi",
    age: 30,
    weight: 101,
    height: 1.81
}
];

const people_att = people.map(function(people){
  let bmi_ = bmi(people.weight,people.height)
  return {...people, bmi: bmi_, classification: classification(bmi_)}
})

console.log(people_att)


function bmi(peso,altura){
  const bmi = peso/(altura**2)
  return parseFloat(bmi.toFixed(2))
}

function classification(bmi){
  if(bmi < 18.5 || bmi > 25) { 
    return 'Fora da faixa normal'}
  else 
  {return 'Normal'
  }
}

// Questão 5

const customers = [
  [1, 'isidro_von@hotmail.com', 'Switzerland'],
  [2, 'frederique19@gmail.com', 'Micah Sanford', 'Democratic People\'s Republic of Korea'],
  [3, 'fredy54@gmail.com', 'Tunisia'],
  [4, 'braxton29@hotmail.com', 'Egypt'],
  [5, 'josh_batz60@gmail.com', 'Serbia'],
  [6, 'emie_corkery82@yahoo.com', 'Brazil']
];

const customers_fields = customers.map(function(usuario){
  return {ìd: usuario[0], email: usuario[1], country: usuario[2]}
})

console.log(customers_fields)

// Questão 6

const posts = [
  {
    id: 0,
    title: 'Programação Funcional',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: 'Gabriel Millitelo'
  },
  {
    id: 1,
    title: 'Funções de Alta Ordem',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: 'Lucas Maia'
  },
  {
    id: 2,
    title: 'Funções de Alta Ordem de Arrays',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: 'Felipe Cabral'
  },
  {
    id: 3,
    title: 'Função map()',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: 'Walisson Silva'
  }
];

const posts_modificado = posts.map(function(postagem){
  return {...postagem, content: postagem.content.substring(0,300), author: postagem.author.toUpperCase()}
})

console.log(posts_modificado)