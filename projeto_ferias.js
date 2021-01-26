const input = require('readline-sync');
const crypto = require('crypto');
const fs = require ('fs')

let senhadb = input.question("Digite a senha do banco de dados: ")
tela_inicial()
logon()

async function logon()
{
  let perfil = await validacao()
  perfil_usuario = perfil[0]
  usuario = perfil [1]
  switch (perfil_usuario){
    case 0:
      await logon()
      break

    case 1:
      await tela_logon(usuario, perfil_usuario)
      await tela_menu_cliente()
      await menu_cliente(usuario)
      break

    case 2:
      await tela_logon(usuario, perfil_usuario)
      await tela_menu_gerente()
      await menu_gerente(usuario)
      break
      
    }
  }


  async function menu_cliente(usuario)
  {
    let escolha = input.question('Digite a opcao desejada: ')
    switch (escolha){
      case "1":
        await consulta_saldo(usuario)
        break
  
      case "2":
        await consulta_extrato(usuario)
        break
  
      case "3":
        await efetua_saque(usuario)
        break

      case "4":
        await efetua_deposito(usuario)
        break
  
      case "5":
        await efetua_transferencia(usuario)
        break
  
      case "6":
        await efetua_emprestimo(usuario)
        break

      case "0":
        await efetua_logout()
        break

      default:
        console.log('Opcao Invalida')
        await menu_cliente()
        break

      }
    }

  async function menu_gerente()
  {
    let escolha = input.question('Digite a opcao desejada: ')
    switch (escolha){
      case "1":
        await efetua_cadastro()
        break
  
      case "2":
        await efetua_alteracao()
        break
  
      case "3":
        await efetua_aprovacao()
        break

      case "0":
        await efetua_logout()
        break

      default:
        console.log('Opcao Invalida')
        await menu_gerente()
        break

      }
    }


  
  async function menu_retorno(){
    let escolha = input.question('Pressione qualquer tecla para voltar ao menu anterior ou 0 para logout ')
    switch (escolha){
      case "0":
        await efetua_logout()
        break

      default:
        switch (perfil_usuario){
          case 1:
          await tela_menu_cliente()
          await menu_cliente(usuario)
          break
          
          case 2:
          await tela_menu_gerente()
          await menu_gerente(usuario)
          break
        }
        break

  }
}
  

//** TELA INICIAL */

function tela_inicial(){
  console.log(`               ============================================
                    SEJA BEM VINDO SISTEMA DO BANCO 
               ============================================
                      POR FAVOR FAÇA A AUTENTICAÇÃO
               ============================================`)
}

function tela_logon(usuario, perfil){
  console.log(`               ============================================
                    Seja bem-vindo(a) ${usuario}!
               ============================================
                      Perfil ${perfil}
               ============================================`)
}

function tela_menu_cliente(){
  console.log(`               ============================================
                    Selecione uma das opções abaixo: 
               ============================================
                      1 - Saldo
                      2 - Extrato
                      3 - Saque
                      4 - Depósito
                      5 - Transferência
                      6 - Empréstimo
                      0 - Logout
               ============================================`)
}

function tela_menu_gerente(){
  console.log(`               ============================================
                    Selecione uma das opções abaixo: 
               ============================================
                      1 - Cadastro de Clientes
                      2 - Alteração de cadastro
                      3 - Aporovação / Rejeição de transações
                      0 - Logout
               ============================================`)
}

//***CONEXÃO COM O MYSQL***/
async function connect(){
  if(global.connection && global.connection.state !== 'disconnected')
      return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(`mysql://felipe:${senhadb}@database-lc-js.c65asbwk5kv5.us-east-1.rds.amazonaws.com:3306/projetojs`);
  global.connection = connection;
  return connection;
}


//***QUERY DE CONSULTA ***/

async function consultadb(query){
    const conn = await connect();
    const [rows] = await conn.query(query);
    return rows;
}


//***QUERY DE INSERT ***/

async function insertdb(query,array){
  const conn = await connect();
  return await conn.query(query,array);
}

//*** VALIDAÇÃO DE USUARIOS */

async function validacao(){
  
  if(fs.existsSync('session.txt')){
    let sessao = fs.readFileSync('session.txt', 'utf-8').split(";")
    sessao[0] = parseInt(sessao[0]) 
    return sessao
  }

  let usuario = input.question('Digite o seu usuario: ')
  let senha = input.question('Digite sua senha: ')
  var hash = crypto.createHash('md5').update(senha).digest('hex');
  let user_found = await consultadb(`SELECT password, perfil FROM usuarios WHERE user = '${usuario}'`)
  if (user_found.length != 1){
    console.log('Usuario Inexistente')
    return [0, usuario]
  }
  else if (hash == user_found[0].password){
    fs.writeFileSync('session.txt', `${user_found[0].perfil};${usuario}`, 'utf-8')
    return [user_found[0].perfil, usuario]
  }
  else{
    console.log('Senha Invalida')
    return [0, usuario]
  }

}

//*** LOGOUT */

async function efetua_logout(){
  if(global.connection){
    global.connection.end()
  }
  fs.unlinkSync('session.txt')
  console.log('Logout efetuado com sucesso')
  input.question('Pressione qualquer tecla para sair.')
}

//** EFETUA CADASTRO */

async function efetua_cadastro(){
  console.log('Esta opção cadastra um novo cliente no banco')
  let user = input.question('Digite um usuario para o cliente: ')
  let senha = input.question('Digite uma senha para o cliente: ')
  let nome = input.question('Digite o nome do cliente: ')
  let agencia = input.question('Digite a agencia com quatro digitos: ')
  let conta = input.question('Digite a conta com seis digitos: ')
  let hash = crypto.createHash('md5').update(senha).digest('hex');
  await insertdb('INSERT INTO clientes VALUES (?,?,?,?,0)',[user,nome,agencia,conta])
  await insertdb('INSERT INTO usuarios VALUES (?,?,1)',[user,hash])
  console.log(`               ============================================
                Usuario criado com sucesso. Anote os dados: 
               ============================================
                      Usuario: ${user}
                      Nome: ${nome}
                      Agencia: ${agencia}
                      Conta: ${conta}
               ============================================`)
  
  await menu_retorno();

}

//*** ALTERA CADASTRO */

async function efetua_alteracao(){
  console.log('Esta opção altera o cadastro de um cliente que ja existe. Caso nao queira altera o campo pressione enter.')
  let user = input.question('Digite o usuario do cliente: ')
  let user_found = await consultadb(`SELECT password, perfil FROM usuarios WHERE user = '${user}'`)
  let cliente_found = await consultadb(`SELECT nome, agencia, conta FROM clientes WHERE user = '${user}'`)

  let senha = input.question('Digite a nova senha do cliente: ')
  let nome = input.question('Digite o novo nome do cliente: ')
  let agencia = input.question('Digite a nova agencia com quatro digitos: ')
  let conta = input.question('Digite a nova conta com seis digitos: ')
  let hash = crypto.createHash('md5').update(senha).digest('hex');

  if(senha == ''){
    hash = user_found[0].password
  }

  if(nome == ''){
    nome = cliente_found[0].nome
  }

  if(agencia == ''){
    agencia = cliente_found[0].agencia
  }

  if(conta == ''){
    conta = cliente_found[0].conta
  }

  await insertdb(`UPDATE clientes SET nome = '${nome}', agencia = ${agencia}, conta = ${conta} WHERE user = '${user}'`)
  await insertdb(`UPDATE usuarios SET password = '${hash}' WHERE user = '${user}'`)


  console.log(`               ============================================
                Usuario alterado com sucesso. Anote os dados: 
               ============================================
                      Usuario: ${user}
                      Nome: ${nome}
                      Agencia: ${agencia}
                      Conta: ${conta}
               ============================================`)
  
  await menu_retorno();

}

//** CONSULTA SALDO */

async function consulta_saldo(usuario){
  let lista_saldo = await consultadb(`SELECT user, nome, agencia, conta, saldo FROM clientes`)
  let saldo_cliente = lista_saldo.filter(function(linha) {
  return (linha.user == usuario)})
  console.log(`               ============================================
                               SALDO   
               ============================================
                      Nome: ${saldo_cliente[0].nome}
                      Agencia: ${saldo_cliente[0].agencia}
                      Conta: ${saldo_cliente[0].conta}
                      Saldo: R$ ${saldo_cliente[0].saldo}
               ============================================`)
  await menu_retorno();
}

//** DEPOSITO */

async function efetua_deposito(usuario){
  let valor = input.question('Digite o valor a ser depositado: ')
  let descricao = input.question('Digite uma descricao para o deposito: ')
  let lista_cliente = await consultadb(`SELECT user, nome, agencia, conta FROM clientes WHERE user = '${usuario}'`)
  await insertdb('INSERT INTO pendencias (user, agencia, conta, descricao, lancamento, pendente) VALUES (?,?,?,?,?,false)',[usuario, lista_cliente[0].agencia,lista_cliente[0].conta, descricao, valor])
  console.log(`               ============================================
                        COMPROVANTE DE DEPOSITO   
               ============================================
                      Nome: ${lista_cliente[0].nome}
                      Agencia: ${lista_cliente[0].agencia}
                      Conta: ${lista_cliente[0].conta}
                      Valor Depositado: R$ ${valor}

                      O DEPOSITO SERA EFETIVADO APOS 
                       APROVACAO DO GERENTE DA CONTA
               ============================================`)
  await menu_retorno();
}


//** EMPRESTIMO */

async function efetua_emprestimo(usuario){
  let valor = input.question('Digite o valor a ser solicitado: ')
  let descricao = input.question('Digite uma descricao para o emprestimo: ')
  let lista_cliente = await consultadb(`SELECT user, nome, agencia, conta FROM clientes WHERE user = '${usuario}'`)
  await insertdb('INSERT INTO pendencias (user, agencia, conta, descricao, lancamento, pendente, emprestimo) VALUES (?,?,?,?,?,false,true)',[usuario, lista_cliente[0].agencia,lista_cliente[0].conta, descricao, valor])
  console.log(`               ============================================
                  COMPROVANTE DE SOLICITACAO DE EMPRESTIMO   
               ============================================
                      Nome: ${lista_cliente[0].nome}
                      Agencia: ${lista_cliente[0].agencia}
                      Conta: ${lista_cliente[0].conta}
                      Valor Solicitado: R$ ${valor}

                      O EMPRESTIMO SERA EFETIVADO APOS 
                       APROVACAO DO GERENTE DA CONTA
               ============================================`)
  await menu_retorno();
}

// ** SAQUE //


async function efetua_saque(usuario){
  let aviso = ''
  let valor = input.question('Digite o valor a ser sacado: ')
  let descricao = input.question('Digite uma descricao para o saque: ')
  let lista_cliente = await consultadb(`SELECT user, nome, agencia, conta, saldo FROM clientes WHERE user = '${usuario}'`)

  if (valor > lista_cliente[0].saldo || valor <=0 ){
    console.log(`               ============================================
                    Saque de R$ ${valor} não autorizado.
                  O saldo disponivel eh de R$ ${lista_cliente[0].saldo} 
                ============================================`)
  }

  else{

    if (valor > 500){
      await insertdb('INSERT INTO pendencias  (user, agencia, conta, descricao, lancamento, pendente) VALUES (?,?,?,?,?,false)',[usuario,lista_cliente[0].agencia,lista_cliente[0].conta, descricao, -valor])
      aviso =`
                        SAQUES SUPERIORES A R$ 500
                        NECESSITAM DE APROVACAO DO
                           GERENTE DA CONTA  `
      }
    
      else {
        lista_cliente[0].saldo = lista_cliente[0].saldo - valor
        await insertdb(`UPDATE clientes SET saldo = '${lista_cliente[0].saldo}' WHERE user = '${usuario}'`)
        await insertdb('INSERT INTO lancamentos VALUES (?,?,?,?,?)',[usuario,lista_cliente[0].agencia,lista_cliente[0].conta, descricao, -valor])
      }
    
      console.log(`                   ============================================
                            COMPROVANTE DE SAQUE   
                   ============================================
                          Nome: ${lista_cliente[0].nome}
                          Agencia: ${lista_cliente[0].agencia}
                          Conta: ${lista_cliente[0].conta}
                          Valor Sacado: R$ ${valor}
                                ${aviso}
                   ============================================`)

  }

  await menu_retorno();
}


//** EXTRATO */

async function consulta_extrato(usuario){
  let lista_extrato = await consultadb(`SELECT * FROM lancamentos`)
  let lista_cliente = await consultadb(`SELECT user, nome, agencia, conta, saldo FROM clientes WHERE user = '${usuario}'`)
  let extrato_cliente = lista_extrato.filter(function(lancamento){
    return(lancamento.user == usuario)
  })
  console.log(`               ============================================
                                  EXTRATO   
               ============================================
                    Usuario: ${lista_cliente[0].user}
                    Nome: ${lista_cliente[0].nome}
                    Agencia: ${lista_cliente[0].agencia}
                    Conta: ${lista_cliente[0].conta}
                    Saldo: R$ ${lista_cliente[0].saldo}
               ============================================
                 DESCRICAO           |    LANCAMENTO       `)
  extrato_cliente.forEach(function(linha){console.log(`                 ${linha.descricao}${' '.repeat(20-linha.descricao.length)}|    R$ ${linha.lancamento}`) 
})


  await menu_retorno();
}


//** TRANSFERENCIA */

async function efetua_transferencia(usuario){
  let valor = parseInt(input.question('Digite o valor a ser transferido: '))
  let ag_destino = input.question('Digite a agencia destino: ')
  let ct_destino = input.question('Digite a conta destino: ')
  let descricao = input.question('Digite uma descricao : ')
  
  let lista_cliente_origem = await consultadb(`SELECT user, nome, agencia, conta, saldo FROM clientes WHERE user = '${usuario}'`)

  let lista_cliente_destino = await consultadb(`SELECT user, nome, agencia, conta, saldo FROM clientes WHERE agencia = ${ag_destino} AND conta = ${ct_destino} `)

  if (valor > lista_cliente_origem[0].saldo || valor <=0 ){
    console.log(`               ============================================
                    Transferencia de R$ ${valor} não autorizada.
                  O saldo disponivel eh de R$ ${lista_cliente_origem[0].saldo} 
                ============================================`)
  }

  else{
    lista_cliente_origem[0].saldo = lista_cliente_origem[0].saldo - valor
    lista_cliente_destino[0].saldo = lista_cliente_destino[0].saldo + valor
    await insertdb(`UPDATE clientes SET saldo = '${lista_cliente_origem[0].saldo}' WHERE user = '${usuario}'`)
    await insertdb(`UPDATE clientes SET saldo = '${lista_cliente_destino[0].saldo}' WHERE user = '${lista_cliente_destino[0].user}'`)

    await insertdb('INSERT INTO lancamentos VALUES (?,?,?,?,?)',[usuario,lista_cliente_origem[0].agencia,lista_cliente_origem[0].conta, descricao, -valor])

    await insertdb('INSERT INTO lancamentos VALUES (?,?,?,?,?)',[lista_cliente_destino[0].user,lista_cliente_destino[0].agencia,lista_cliente_destino[0].conta, descricao, valor])

      console.log(`               ============================================
                        COMPROVANTE DE TRANSFERENCIA   
               ============================================
                      Nome: ${lista_cliente_origem[0].nome}
                      Agencia: ${lista_cliente_origem[0].agencia}
                      Conta: ${lista_cliente_origem[0].conta}

                      Nome Destino: ${lista_cliente_destino[0].nome}
                      Agencia Destino:${lista_cliente_destino[0].agencia}
                      Conta Destino: ${lista_cliente_destino[0].conta}

                      Valor Transferido: R$ ${valor}
               ============================================`)
  }

  await menu_retorno();
}


//** AUTORIZACAO */

async function efetua_aprovacao(){
  let lista_pend = await consultadb(`SELECT * FROM pendencias`)
  let pendencias = lista_pend.filter(function(linha){
    return (linha.pendente == false)
  })
  let emprestimo_ = "NAO"
  pendencias = pendencias.map(function(linha){
    if(linha.emprestimo){
      emprestimo_ = "SIM"
    }
    return {...linha, emprestimo: emprestimo_}
  })
  console.log(`               ======================================================================================
                                AUTORIZACOES PENDENTES DE APROVACAO   
               ======================================================================================
               ID   |  USUARIO   | AGENCIA   | CONTA     | DESCRICAO      | VALOR       | EMPRESTIMO?
               ======================================================================================`)

  pendencias.forEach(function(pend){
    console.log(`               ${pend.id}${' '.repeat(5-pend.id.toString().length)}| ${pend.user}${' '.repeat(11-pend.user.length)}| ${pend.agencia}${' '.repeat(10-pend.agencia.toString().length)}| ${pend.conta}${' '.repeat(10-pend.conta.toString().length)}| ${pend.descricao}${' '.repeat(15-pend.descricao.length)}| R$ ${pend.lancamento}${' '.repeat(9-pend.lancamento.toString().length)}| ${pend.emprestimo} `) 
  })

  if (pendencias.length != 0){

    let id = input.question('Qual o ID voce deseja selecionar? (enter para sair) :')
    let decisao = input.question('Digite A para Aprovar, R para rejeitar. (enter para sair) :')

    if(decisao == "A"){

      pendencias = lista_pend.filter(function(linha){
        return (linha.id == id)})

      let lista_cliente = await consultadb(`SELECT user, nome, agencia, conta, saldo FROM clientes WHERE user = '${pendencias[0].user}'`)

      if(pendencias[0].lancamento > 0 || Math.abs(pendencias[0].lancamento) <= lista_cliente[0].saldo){
        lista_cliente[0].saldo = lista_cliente[0].saldo + pendencias[0].lancamento
        await insertdb(`UPDATE clientes SET saldo = '${lista_cliente[0].saldo}' WHERE user = '${pendencias[0].user}'`)
        await insertdb(`UPDATE pendencias SET pendente = true WHERE id = ${id}`)
        await insertdb('INSERT INTO lancamentos VALUES (?,?,?,?,?)',[lista_cliente[0].user,lista_cliente[0].agencia,lista_cliente[0].conta, pendencias[0].descricao, pendencias[0].lancamento])
        
        if(pendencias[0].emprestimo){
          await insertdb('INSERT INTO emprestimos VALUES (?,?,?,?,?)',[lista_cliente[0].user,lista_cliente[0].agencia,lista_cliente[0].conta, pendencias[0].descricao, pendencias[0].lancamento])
        }
        
        
        console.log(`                    ============================================
                              TRANSACAO AUTORIZADA   
                            Agencia: ${lista_cliente[0].agencia}
                            Conta: ${lista_cliente[0].conta}
                            Valor : R$ ${pendencias[0].lancamento}
                    ============================================`)

      }

      else{
        console.log(`                      ============================================
                      Transacao não autorizada. Saldo Insuficiente   
                      ============================================`)
      }
      
    }

    else if(decisao == "R"){
      await insertdb(`DELETE from pendencias WHERE id = ${id}`)
      console.log(`                      ============================================
                            Pendencia rejeitada com sucesso.   
                        ============================================`)
    }
  }

  await menu_retorno();


}        