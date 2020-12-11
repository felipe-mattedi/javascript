// Questão 1

const vetor_1 = [1,3,5,10,15,16,29]

const vetor_1_a = vetor_1.reduce(function(estado,x){
  return estado+x
})

console.log(vetor_1_a)

// Questão 2

const vetor_2 = [1,3,5,10,15,16,29]

const vetor_2_a = vetor_2.reduce(function(estado,x){

  return estado.toString().concat(x)
})

console.log(vetor_2_a)

// Questão 3

const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
]

let voters_true = voters.reduce(function(estado,votante){
  if(votante.voted){
    estado++
  }
    return estado
},0)


console.log(voters_true)

// Questão 4

const products = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

let products_price = products.reduce(function(estado,produto){
  return estado+produto.price
},0)


console.log(products_price)

// Questão 5

const matrix = [["1", "2", "3"],[true], [4, 5, 6]]

let matrix_unique = matrix.reduce(function(estado,vetor){
  for(n in vetor){
    estado.push(vetor[n])
  }
  return estado
},[])


console.log(matrix_unique)

// Questão 6

const voters_2 = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted: true},
  {name:'Tami' , age: 54, voted: true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false},
  {name: 'Felipe', age: 60, voted: true}
]


let voters_2_separado = voters_2.reduce(function(estado,votante){

  if(votante.age>55 || votante.age<18 ){
    if(!votante.voted){
      return {...estado, numOtherPeople: estado.numOtherPeople+1}
    }
     return  {...estado, numOtherPeople: estado.numOtherPeople+1, numOtherVotesPeople: estado.numOtherVotesPeople+1}
  }
  
  else if(votante.age>=36){
    if(!votante.voted){
      return {...estado, numOldsPeople: estado.numOldsPeople+1}
    }
     return  {...estado, numOldsPeople: estado.numOldsPeople+1, numOldVotesPeople: estado.numOldVotesPeople+1}
  }
  else if(votante.age>=26){
    if(!votante.voted){
      return  {...estado, numMidsPeople: estado.numMidsPeople+1}
    }
    return  {...estado, numMidsPeople: estado.numMidsPeople+1, numMidVotesPeople: estado.numMidVotesPeople+1}
  }
  else if(votante.age>=18){
    if(votante.voted){
      return {...estado, numYoungPeople: estado.numYoungPeople+1}
    }
    return {...estado, numYoungPeople: estado.numYoungPeople+1, numYoungVotes: estado.numYoungVotes+1}
  }
},{numYoungVotes:0, numYoungPeople:0, numMidVotesPeople: 0, numMidsPeople:0, numOldVotesPeople:0,numOldsPeople:0,numOtherVotesPeople:0, numOtherPeople:0})

console.log(voters_2_separado)

// Questão 7

// Implementação do MAP

const valor_real = [100, 214, 2150, 300, 459, 600, 715, 705, 110, 95]

const valor_com_desconto_map = valor_real.map(valor => {
  if (valor < 200) return valor*0.95
  else if(valor < 400) return valor*0.9
  else if(valor < 2000) return valor*0.85
  else return valor*.8
})

const valor_com_desconto = valor_real.reduce(function(estado,valor){
  if (valor < 200) estado.push(valor*0.95)
  else if(valor < 400)  estado.push(valor*0.9)
  else if(valor < 2000)  estado.push(valor*0.85)
  else estado.push(valor*.8)
  return estado
},[])

console.log(valor_com_desconto_map )
console.log(valor_com_desconto )

// Implementação do FILTER


const vetor = [-10,2,6,15,1,-95,-7,16,17,25,56,100]

const vetor_maior_5_filter = vetor.filter(function(x){
  return (x>5)
})

const vetor_maior_5_reduce = vetor.reduce(function(estado, x){
  if(x>5) estado.push(x)
  return estado
},[])

console.log(vetor_maior_5_filter)
console.log(vetor_maior_5_reduce)


// Questão 8

const matrix_soma = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let i = 0
const matrix_diagonal = matrix_soma.reduce(function(estado, atual){
  estado = estado+atual[i]
  i = i+1
  return (estado)
},0)

console.log(matrix_diagonal)

