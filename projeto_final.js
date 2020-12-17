const axios = require("axios").default;
const input = require('readline-sync');

 const cabecalho_principal = 
 `
========================================================
=       BEM VINDO AO PROGRAMA DE STATUS DE VOOS        =
=             E BUSCAS DE PASSAGENS AEREAS!            =
========================================================`

 const cabecalho = 

`========================================================
=                                                      =
=      DIGITE A OPCAO DESEJADA:                        =
=                                                      =
=   1 - Status de voos                                 =
=   2 - Busca de passagens                             =
=   3 - Sair                                           =
=                                                      =
========================================================`

const menu_voo = 
`
========================================================
=       DIGITE A OPCAO DESEJADA:                       =
=       1 - BUSCA POR VOO                              =
=       2 - BUSCA POR ROTA                             =
=       3 - BUSCA POR AEROPORTO ORIGEM                 =
=       4 - BUSCA POR AEROPORTO DESTINO                =
=       5 - VOLTAR                                     =
========================================================`

const opcao_invalida = 
`
========================================================
=       DIGITE UMA OPCAO VALIDA                        =
========================================================`

const menu_precos = 
`
========================================================
=       BEM VINDO A BUSCA DE MENOR PRECO               =
========================================================`

const menu_voo_1 = 
`
========================================================
=       ATENCAO: PARA EFETUAR A BUSCA EH NECESSARIO    =
=        SABER O CODIGO ICAO DA EMPRESA AEREA          =
=                                                      =
=       DIGITE A OPCAO DESEJADA:                       =
=       1 - SEI O CODIGO E QUERO EFETUAR A BUSCA       =
=       2 - BUSCAR CODIGO DA EMPRESA AEREA             =
=       3 - VOLTAR                                     =
========================================================`

const menu_voo_2 = 
`
========================================================
=       ATENCAO: PARA EFETUAR A BUSCA EH NECESSARIO    =
=        SABER O CODIGO ICAO DO AEROPORTO.             =
=                                                      =
=       DIGITE A OPCAO DESEJADA:                       =
=       1 - SEI O CODIGO E QUERO EFETUAR A BUSCA       =
=       2 - BUSCAR CODIGO DO AEROPORTO                 =
=       3 - VOLTAR                                     =
========================================================`

console.log(cabecalho_principal)
menu_inicial()


async function menu_inicial(){
  console.log(cabecalho)
  let escolha = input.question(' OPCAO: ')
  switch(escolha){
    case "1": await status_voo()
    break

    case "2": await busca_de_passagens()
    break

    case "3":
    break

    default: 
    console.log(opcao_invalida)
    menu_inicial()
  }

}

async function status_voo(){
  console.log(menu_voo)
  let escolha_2 = input.question(' OPCAO: ')
  switch(escolha_2){
    case "1": 
    await busca_voo()
    break

    case "2": 
    await busca_rota()
    break

    case "3": 
    await busca_por_origem()
    break

    case "4": 
    await busca_por_destino()
    break

    case "5": menu_inicial()
    break

    default: 
    console.log(opcao_invalida)
    status_voo()
  }
}


async function busca_voo(){
 console.log(menu_voo_1)
 let escolha_3 = input.question(' OPCAO: ')
 switch(escolha_3){
   case "1": await busca_voo_codigo()
   break

   case "2": await busca_empresa_codigo()
   busca_voo()
   break

   case "3": status_voo()
   break

   default: 
   console.log(opcao_invalida)
   busca_voo()
  } 
}

async function busca_rota(){
  console.log(menu_voo_2)
  let escolha_4 = input.question(' OPCAO: ')
  switch(escolha_4){
    case "1": await busca_rota_codigo()
    break
 
    case "2": await busca_aeroporto_codigo()
    busca_rota()
    break
 
    case "3": status_voo()
    break
 
    default: 
    console.log(opcao_invalida)
    busca_rota()
   } 
 }

 async function busca_por_origem(){
  console.log(menu_voo_2)
  let escolha_5 = input.question(' OPCAO: ')
  switch(escolha_5){
    case "1": await busca_origem()
    break
 
    case "2": await busca_aeroporto_codigo()
    busca_por_origem()
    break
 
    case "3": status_voo()
    break
 
    default: 
    console.log(opcao_invalida)
    busca_por_origem()
   } 
 }

 async function busca_por_destino(){
  console.log(menu_voo_2)
  let escolha_6 = input.question(' OPCAO: ')
  switch(escolha_6){
    case "1": await busca_destino()
    break
 
    case "2": await busca_aeroporto_codigo()
    busca_por_destino()
    break
 
    case "3": status_voo()
    break
 
    default: 
    console.log(opcao_invalida)
    busca_por_destino()
   } 
 }

 async function busca_de_passagens(){
  console.log(menu_precos)
  console.log(menu_voo_2)
  let escolha_7 = input.question(' OPCAO: ')
  switch(escolha_7){
    case "1": await busca_preco_rota()
    break
 
    case "2": await busca_aeroporto_codigo()
    busca_de_passagens()
    break
 
    case "3": menu_inicial()
    break
 
    default: 
    console.log(opcao_invalida)
    busca_de_passagens()
   }
  }

 async function busca_empresa_codigo(){
  let empresa = input.question(' DIGITE PARTE DO NOME DA EMPRESA: ')
  let dados = await executa_busca_empresa(empresa)
  formata_tela_empresa(dados)

 }

 async function busca_aeroporto_codigo(){
  let cidade = input.question(' DIGITE PARTE DO NOME DA CIDADE: ')
  let dados = await executa_busca_cidade(cidade)
  formata_tela_cidade(dados)

 }

 async function busca_voo_codigo(){
  let cia = input.question(' DIGITE O CODIGO DA EMPRESA AEREA: ')
  let voo = input.question(' DIGITE O NUMERO DO VOO: ')
  let dados = await executa_busca_voo('','',(cia+voo))
  formata_tela(dados)
}

async function busca_rota_codigo(){
  let dep = input.question(' DIGITE O AEROPORTO DE PARTIDA: ')
  let arr = input.question(' DIGITE O AEROPORTO DE DESTINO: ')
  let dados = await executa_busca_voo(dep,arr)
  formata_tela(dados)
}

async function busca_origem(){
  let origem = input.question(' DIGITE O AEROPORTO DESEJADO: ')
  let dados = await executa_busca_voo(origem,'','')
  formata_tela(dados)
}


async function busca_destino(){
  let destino = input.question(' DIGITE O AEROPORTO DESEJADO: ')
  let dados = await executa_busca_voo('', destino,'')
  formata_tela(dados)
}

async function busca_preco_rota(){
  let origem = input.question(' DIGITE O AEROPORTO DE ORIGEM: ')
  let destino = input.question(' DIGITE O AEROPORTO DE DESTINO: ')
  let data =  input.question(' DIGITE A DATA NO FORMATO AAAA-MM-DD: ')
  let dados = await executa_busca_preco(origem, destino, data)
  formata_tela_preco(dados)

}

async function executa_busca_preco(origem, destino, data){
  let url_fixa = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/BR/BRL/pt-BR/${origem}-sky/${destino}-sky/${data}`

  let options = {
    method: 'GET',
    url: url_fixa,
    headers: {
      'x-rapidapi-key': '948c30a8abmsh5648b380888f52bp1feb10jsn3ada46112d41',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
  };

  let dados = await axios.request(options).then(function(response) {
    return (response.data)})

    let data_ida = dados.Quotes[0].OutboundLeg.DepartureDate.substring(0,10)
    let cia_aerea =  dados.Carriers[0].Name
    let origem_iata = dados.Places[0].IataCode
    let origem_cidade = dados.Places[0].CityName
    let destino_iata = dados.Places[1].IataCode
    let destino_cidade = dados.Places[1].CityName
    let moeda = dados.Currencies[0].Symbol
    let preco_min = dados.Routes[0].Price

    return {data_ida, cia_aerea, origem_iata, origem_cidade, destino_iata, destino_cidade, moeda, preco_min}
  
}


async function executa_busca_empresa(empresa_procurada){
  let dados = await axios.get("http://airlabs.co/api/v7/airlines?api_key=b6e2a93d-a7b4-407d-9003-a39aa8d4aac9").then(function(response) {
    return (response.data)})
    let dados_final = dados.response.filter(function(empresa){
      return (empresa.name.toLowerCase().search(empresa_procurada.toLowerCase()) != -1)})
    return dados_final}


async function executa_busca_cidade(cidade_procurada){
  let dados = await axios.get("http://airlabs.co/api/v6/cities?api_key=b6e2a93d-a7b4-407d-9003-a39aa8d4aac9").then(function(response) {
    return (response.data)})
    let dados_final = dados.response.filter(function(cidade){
      return (cidade.name.toLowerCase().search(cidade_procurada.toLowerCase()) != -1)})
    return dados_final}


async function executa_busca_voo(dep = '',arr = '',voo = ''){
  let dados = await axios.get(`http://api.aviationstack.com/v1/flights?access_key=5bdae6e7e718aa52bd43ee675820064e&dep_iata=${dep}&arr_iata=${arr}&flight_iata=${voo}`).then(function(response) {
    return (response.data)})
  let dados_final = dados.data.map(function(voo){
      return({ data: voo.flight_date, status: voo.flight_status, partida: voo.departure.iata, chegada: voo.arrival.iata, partida_est: voo.departure.estimated, partida_atual: voo.departure.actual, chegada_est: voo.arrival.estimated ,chegada_atual:voo.arrival.actual ,empresa: voo.airline.name, voo: voo.flight.number, codeshare: voo.flight.codeshared})})
     return dados_final}


function formata_tela(dados){
  console.log(
    `
    =======================================================================================================================
    =    DATA    | ORIGEM | DESTINO | PART. EST | PART. ATUAL | CHEG. EST | CHEG. ATUAL | STATUS    |  VOO   | EMPRESA      =
    =======================================================================================================================
    `)
  
    dados.forEach(function(valor,indice){
      if (valor.codeshare === null){
      let partest = valor.partida_est.substring(11,16)
      let partconf = valor.partida_atual === null ? '-----' : valor.partida_atual.substring(11,16)
      let chegest = valor.chegada_est.substring(11,16)
      let chegconf = valor.chegada_atual === null ? '-----' : valor.chegada_atual.substring(11,16)

    console.log(`    * ${valor.data} |  ${valor.partida}   |   ${valor.chegada}   |   ${partest}   |    ${partconf}    |   ${chegest}   |    ${chegconf}    | ${valor.status} |   ${valor.voo}  | ${valor.empresa}  `)
    }})

    console.log(
    `
    =======================================================================================================================
    `)
}

function formata_tela_cidade(dados){
console.log(
  `
  ========================================================
  = CODIGO ICAO | PAIS | CIDADE                          =  
  ======================================================== `
)

dados.forEach(function(valor,indice){
  console.log(`  *     ${valor.code}     |  ${valor.country_code}  | ${valor.name}`)
})

console.log("  ========================================================")

}

function formata_tela_empresa(dados){
  console.log(
    `
    ========================================================
    = CODIGO ICAO | EMPRESA                                =  
    ======================================================== `
  )
  
  dados.forEach(function(valor,indice){
    let iata = valor.iata_code === null ? '--' : valor.iata_code
    console.log(`    *     ${iata}      |  ${valor.name}`)
  })
  
  console.log("    ========================================================")
  
  }

  function formata_tela_preco(dados){
  console.log(
    `
    ====== DADOS DO MELHOR PRECO ENCONTRADO ====
    DATA      = ${dados.data_ida}
    ORIGEM    = ${dados.origem_iata} - ${dados.origem_cidade}
    DESTINO   = ${dados.destino_iata} - ${dados.destino_cidade}
    PRECO     = ${dados.moeda} ${dados.preco_min}
    CIA AEREA = ${dados.cia_aerea}
    ============================================
    `
  )
  }
