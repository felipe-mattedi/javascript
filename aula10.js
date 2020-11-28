//Pacotes necessarios para o programa

var entrada = require('readline-sync')
var fs = require('fs');
var readline = require('readline');
var uuid = require('uuid');

//Execucao do programa: Inicializa traz o cabeçalho e selecionaopcoes traz o menu

inicializa()

selecionaopcoes()

// Funcoes para execução do programa

function inicializa(){
console.log('|-----------------------------------------------|')
console.log('|------ BEM VINDO AO PROGRAMA DE CONTROLE ------|')
console.log('|---------- DE LIVROS DA BIBLIOTECA ------------|')
console.log('|-----------------------------------------------|')
}

function selecionaopcoes(){
console.log(' DIGITE:')
console.log(' 1 - Ver a lista de livros')
console.log(' 2 - Adicionar um livro')
console.log(' 3 - Remover um livro')
console.log(' 4 - Editar um livro')
console.log(' 5 - Buscar um livro')
console.log(' 0 - Sair do programa')
console.log('|-----------------------------------------------|')
var opcao = entrada.question(' Escolha a opcao desejada:')
console.log('|-----------------------------------------------|')

  switch(opcao){
    case "1": opcao1()
    break

    case "2": opcao2()
    break

    case "3": opcao3()
    break

    case "4": opcao4()
    break

    case "5": opcao5()
    break

    case "0": 
    console.log('|--------------TERMINO DO PROGRAMA--------------|')
    console.log('|-----------------------------------------------|')
    break

    default: 
    console.log('|----------Digite uma opcao valida--------------|')
    console.log('|-----------------------------------------------|')
    selecionaopcoes()
  }
}

function carregaarquivo(arquivo){
  const data = fs.readFileSync(arquivo, 'UTF-8')
  
  const lines = data.split(/\r?\n/);
  var dados = []
  lines.forEach((line) => {
    if (line != ''){
    var obj =  line.split(';')
    dados.push({codigo: obj[0], nome: obj[1], autor: obj[2]})
  }})
  return dados
}

function escrevearquivo(stream, linha){
  stream.write(linha)
}

function deletaarquivo(arquivo){
  fs.unlinkSync(arquivo)
}


function opcao1(){

  console.log('|-ID-----NOME DO LIVRO -----------AUTOR---------|')
  var dados = carregaarquivo('dados.txt')

  for(livro of dados){
    console.log('|' + livro.codigo + '---' + livro.nome + '------' + livro.autor + '|' )
  }
}

function opcao2(){

  var nomelivro = entrada.question('Digite o nome do livro: ').toUpperCase()
  var autorlivro = entrada.question('Digite o autor do livro: ').toUpperCase()

  var dados = carregaarquivo('dados.txt')
  const stream = fs.createWriteStream('dados.txt');

  dados.push({codigo: uuid.v1().substr(0,5) , nome: nomelivro, autor:autorlivro})
  deletaarquivo('dados.txt')

  for(livro of dados){
    var linhalivro = livro.codigo + ';' + livro.nome + ';' + livro.autor + '\n'
    escrevearquivo(stream, linhalivro)
  }
  console.log('Livro ' + nomelivro + ' adicionado com sucesso!')
}

function opcao3(){

  var excluir = entrada.question('Digite o UUID do livro que voce quer remover: ')
  let excluido = false

  const stream = fs.createWriteStream('dados.txt');

  var dados = carregaarquivo('dados.txt')

  deletaarquivo('dados.txt')

  for(livro of dados){
    if (livro.codigo != excluir){
    let linhalivro = livro.codigo + ';' + livro.nome + ';' + livro.autor + '\n'
    escrevearquivo(stream, linhalivro)}
    else{
      excluido = true
    }
  }

  if (excluido){
    console.log('O livro UUID ' + excluir + ' foi excluido com sucesso!')
  }
  else{
    console.log('UUID ' + excluir + ' nao encontrado. Nao houve exclusoes.')
  }

}

function opcao4(){

  var alterar = entrada.question('Digite o UUID do livro que voce quer alterar: ')
  var alterou = false

  const stream = fs.createWriteStream('dados.txt');

  var dados = carregaarquivo('dados.txt')

  deletaarquivo('dados.txt')

  for(livro of dados){
    if(livro.codigo == alterar){
      livro.nome = entrada.question('Voce vai alterar o nome atual: ' + livro.nome + ' para: ' ).toUpperCase()
      livro.autor = entrada.question('Voce vai alterar o nome atual: ' + livro.autor  + ' para: ').toUpperCase()
      alterou = true
    }

    let linhalivro = livro.codigo + ';' + livro.nome + ';' + livro.autor + '\n'
    escrevearquivo(stream, linhalivro)
  }

    if(alterou){
      console.log('O livro UUID ' + alterar + ' foi alterado com sucesso!')
    }
    else{
      console.log('UUID ' + alterar + ' nao encontrado. Nao houve alteracoes.')
    }
}

function opcao5(){
   
  var dados = carregaarquivo('dados.txt')

  var busca = entrada.question('Digite parte do nome do livro que busca: ').toUpperCase()

  console.log('|-ID-----NOME DO LIVRO -----------AUTOR---------|')

  for(livro of dados){
    if(livro.nome.search(busca) != -1){
    console.log('|' + livro.codigo + '---' + livro.nome + '------' + livro.autor + '|' )
    }
  }

}
