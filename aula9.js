let matrix =  [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

for(i in matrix){
  for(k in matrix[i]){
    console.log(matrix[i][k])
  }
}

let vetor = [1,2,3,4,5,6,7,8,9,10,11]

let [primeiro, segundo, terceiro, ... resto] = vetor

console.log(primeiro)
console.log(segundo)
console.log(terceiro)
console.log(resto)

console.log('A soma e ' + soma_vetor(vetor))

function soma_vetor(vetor){
  if (vetor.length === 0 ) return 0
  const[head, ... tail] = vetor
  return head + soma_vetor(tail)
}