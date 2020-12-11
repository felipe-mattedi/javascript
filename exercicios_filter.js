// Questão 1

const vetor = [-10,2,6,15,1,-95,-7,16,17,25,56,100]

const vetor_maior_5 = vetor.filter(function(x){
  return (x>5)
})

console.log(vetor_maior_5)

// Questão 2

const vetor_pares = vetor.filter( x => x%2 === 0) 

console.log(vetor_pares)

// Questão 3

const vetor_strings = ['felipe','zanotelli','mattedi', 'felipe zanotelli mattedi','abobora','pera','morango','tangerina','uva','melancia','melao','tomate']

const vetor_string_5 = vetor_strings.filter( str => str.length <= 5)

console.log(vetor_string_5)

// Questão 4

const people = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
]

const people_club = people.filter( function(pessoa){
  const membro = {...pessoa}
  return (pessoa.member) 
})

console.log(people_club)

// Questão 5

const people_movie = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
]

const people_movie_18 = people_movie.filter(function(pessoa){
  return (pessoa.age >= 18) 
})

console.log(people_movie_18)

// Questão 6

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const array_primo = array.filter(function(n){
  return (ehprimo(n))
})

console.log(array_primo)


function ehprimo(n){

  var resultado = true
  var k = 2

  if(n < 0) {
    n = n*-1
  }

  for (k ; k < n ; k++){
    if(n%k == 0){
      resultado = false
    }
}

  if(n == 0) {
    resultado = false
  }

  return resultado

}

// Questão 7

// Questão 7

const numeros = [1,2,3,2,1,3,3,5,4,6]
let array_teste = []
const numeros_distintos = numeros.filter(function(n,i,array) {
  return (array.indexOf(n) === i)
})

console.log(numeros_distintos)

// Questão 8

const restaurantes = [
  {
    nome: 'Pizzaria do Mario',
    horario_abertura: 14,
    horario_fechamento: 23
  },
  {
    nome: 'Churrascaria do Ronaldo',
    horario_abertura: 11,
    horario_fechamento: 14,
  },
  {
    nome: 'Bar do Zeca',
    horario_abertura: 12,
    horario_fechamento: 2,
  },
  {
    nome: 'Doceria da Mara',
    horario_abertura: 8,
    horario_fechamento: 20,
  },
]

const restaurantes_abertos = restaurantes.filter(function(rest){
  const hora = new Date()
  const hora_atual = hora.getHours()
  let abre = rest.horario_abertura
  let fecha = rest.horario_fechamento
  if(fecha > abre){
    if(abre <=  hora_atual && fecha > hora_atual){
      return true
    }}
  else{
    if((hora_atual >= abre && hora_atual <= 23) || (hora_atual < fecha && hora_atual >= 0)){
      return true
    }
  }
})

console.log(restaurantes_abertos)