let vetor = [1,2,3,4,5]
let soma = vetor.reduce((state,num) => console.log('state' + state + 'num' + num))

console.log(soma)

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
let somas = matrix.reduce((state,num) => [state[0]+num[0],state[1]+num[1],state[2]+num[2]])
console.log(somas)

const alunos = [{nome: 'Felipe', nota: 4},
{nome: 'Joaquim', nota: 3},
{nome: 'Carolina', nota: 9},
{nome: 'Joao', nota: 8}
]

let notaTotal = alunos.reduce((notacumulada,aluno) => notacumulada + aluno.nota, 0)
console.log(notaTotal)

let notaParcial = alunos.reduce((aprovadosparcial,aluno) => aluno.nota>6 ? [...aprovadosparcial, aluno.nome] : aprovadosparcial, [])
console.log(notaParcial)