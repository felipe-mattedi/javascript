// 1) Faça uma função para cada operação matemática básica (±*/). Em seguida faça uma função chamada calcular de alta-ordem que receba uma operação e dois números e invoque a operação usando os números como parâmetro.

  function soma(a,b){
    return a+b
  }
  
  function subtracao(a,b){
    return a-b
  }

  
  function multiplicaco(a,b){
    return a*b
  }
  
  function divisao(a,b){
    return a/b
  }

  function executa_operacao(operacao, a,b){
    return operacao(a,b)
  }

    console.log(executa_operacao(soma,10,5))
    console.log(executa_operacao(subtracao,10,5))
    console.log(executa_operacao(multiplicaco,10,5))
    console.log(executa_operacao(divisao,10,5))

// 2) Faça uma função chamada desconto, que receba um valor porcentual (por exemplo 10 representa 10%), em seguida ela deve retornar uma função que espera um valor, e retorna esse valor com desconto. Use a sintaxe de function e não arrow. Use sua função para criar duas funções especializadas para 10% e 15% de desconto.

function desconto(desconto){
  return function(valor){
    return valor*(1-(desconto/100))
  }
}

const desc10 = desconto(10)
const desc15 = desconto(15)

console.log(desc10(100))
console.log(desc15(100))

// 3) Refaça o exercício acima usando arrow functions, lembre-se que o retorno é implícito nas arrows, isso gera um padrão muito interessante em funções que retornam funções (evite as chaves…).

const desconto1 = descontoperc => valor => valor*(1-(descontoperc/100))

const desc20 = desconto1(30)
const desc50 = desconto1(40)


console.log(desc20(100))
console.log(desc50(100))

// 4) Crie uma função que recebe outra função, que chamaremos de função de transformação, e um array. Essa função deverá criar um novo array, cujos itens serão os valores do array original, transformados pela função de transformação.

let array_teste = [1,2,3,4,5,6,7,8,9,10]

function principal(funcao, array){
  let new_array = []
  for(i in array){
    new_array.push(funcao(array[i]))
  }
  return new_array
}

function transformacao(valor){
  return valor*10
}

console.log(principal(transformacao,array_teste))


// 5) Crie uma função de alta-ordem que recebe outra função, que chamaremos de função de filtragem, e um array. Essa função deverá criar um novo array cujos itens serão apenas aqueles para os quais a função de filtragem retornar true, se ela retornar false não coloque o valor no array.

function principal1(funcao, array){
  let new_array = []
  for (i in array){
    if(funcao(array[i]))
    new_array.push(array[i])
  }
  return new_array
}

function filtragem(testador){
  return (testador%2 == 0)
}

console.log(principal1(filtragem,array_teste))