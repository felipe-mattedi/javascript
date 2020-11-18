// Exercicio 1

const readline = require('readline-sync')

do{

  var numerodigitado = readline.question('Digite um numero: ')

}
 while(parseInt(numerodigitado) != 0)
 console.log('Você digitou zero. Termino do programa.')

 // Exercicio 2

  console.log('Este programa irá somar todos os numeros até o numero que você digitar')
  var numerodigitado = readline.question('Digite um numero: ')
  var k=0
  var soma = 0
  while(k<=parseInt(numerodigitado)) {
    soma = soma+k
    k++
  }
  console.log('A soma dos números eh: ' + soma)

  // Exercício 3

        console.log('Por favor digite os seguintes dados: ')
        do{
        console.log('A idade deve estar entre 0 e 150 anos')
        var idade = parseInt(readline.question('Digite sua idade: '))
        }
        while(idade < 0 || idade > 150)

        do{
          console.log('O salario deve ser maior que zero')
          var salario = parseInt(readline.question('Digite seu salario: '))
        }
        while(salario < 0)
   
        do{ 
        console.log('O sexo deve ser "M", "F" ou "Outro"')
        var sexo = readline.question('Digite seu sexo: ')
        }
        while(sexo != "F" && sexo != "M" && sexo != "Outro")

    // Exercicio 4

  console.log('Este programa ira calcular o fatorial de um numero')
  var numerodigitado = parseInt(readline.question('Digite um numero: '))
  var fatorial = numerodigitado
  while(numerodigitado > 2) {
    fatorial = fatorial*(numerodigitado-1)
    numerodigitado--
  }
  console.log('O fatorial do numero eh: ' + fatorial)

    // Exercicio 5

    var soma = 0
    var numero = 1
    var contador = 0
    
    while(contador < 1000){
      soma = soma + numero
      numero = numero/2
      contador++
    }

    console.log ("O resultado da soma eh " + soma)