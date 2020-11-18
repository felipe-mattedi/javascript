const readline = require('readline-sync')
let vetor1 = [2,6,54,67,1,12,24]
let vetor2 = [63,5,67,89]

console.log(vetor2[4])

function somavetores(a,b){
  vetorsoma = []
  let tam1 = a.length
  let tam2 = b.length

  if(tam2<tam1){
    for(n in a){
      vetorsoma.push(a[n]+b[n])
    }
    
  }
  
  else {
      for(n in b){
        vetorsoma.push(a[n]+b[n])
      }
  }
  return vetorsoma

}
