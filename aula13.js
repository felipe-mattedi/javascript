const vetor = ['10', '11', '15', '17', '23']

const stringToNumber = str => parseInt(str)

const vetortransformado = vetor.map(stringToNumber)

const vetortransformado2 = vetor.map(function(x){
   return parseInt(x)
})


console.log(vetor)
console.log(vetortransformado)
console.log(vetortransformado2)

const vetor3 =  [2, 4, 8, 7, 13, 22, 80, 41, 40]

const vetor4 = vetor3.map((num,index) => {
  if ( index %2 === 0 ) return num**2
  else return num**3

})

console.log(vetor3)
console.log(vetor4)

const vetor5 = [10, 25, 60, 200]

const vetor6 = vetor5.map((num, index, vector) => num / vector.length)

console.log(vetor5)
console.log(vetor6)

const matrix = [
['10','11','23'],
['3','5','9'],
['34','15','79']
]

const matrix2 = matrix.map(line => line.map(x=>parseInt(x)))

console.log(matrix)
console.log(matrix2)

let employees = [
  {role: 'Dev', salary: 1000},
  {role: 'Designer', salary: 800},
  {role: 'Seller', salary: 700},
  {role: 'Professor', salary: 800}
]

console.log(employees)

employees = employees.map(
  employee => { 
    return {...employee, salary: employee.salary+300}

  }

)

console.log(employees)