var vetor = [ 1 , 2, 'felipe', false, [0,1,2,3]]
console.log(vetor)
console.log(vetor[0])
console.log(vetor[2])
console.log(vetor[3])
console.log(vetor[4])

var vetor2 = [1,2,3,4]
vetor2.push(3)
vetor2.unshift(100)
console.log(vetor2)
console.log(vetor2.length)

let vetor3 =[]

k = 0

while(k <10){
  vetor3.push(k)
  k++
  console.log(vetor3) 
}

k = 0
var x

while(k <5){
  x = vetor3.pop()
  k++
  console.log(vetor3) 
  console.log(x) 
}

while(k <10){
  x = vetor3.shift()
  k++
  console.log(vetor3) 
  console.log(x) 
}


vetor4 = [1,2,3,4,5,6,7,8,9,10,7]
vetor5 = vetor4.slice(3,5)
console.log(vetor5)

console.log(vetor4.includes(7))
console.log(vetor4.includes(11))
console.log(vetor4.indexOf(7))
console.log(vetor4.lastIndexOf(7))
console.log(vetor4.indexOf(11))
console.log(vetor4.concat(vetor5))

vetor6 = vetor4.splice(4,2)
console.log(vetor6)

for (let i = 0; i <= vetor4.length-1; i++){
  console.log('Item ' + vetor4[i])
}

for (let num in vetor4){
  console.log('Item ' + vetor4[num])
}

