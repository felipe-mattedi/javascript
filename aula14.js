const vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

const vetor_5 = vetor.filter(function(x){
  return (x%5 ==0)
})

console.log(vetor)
console.log(vetor_5)