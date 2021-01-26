const fs = require('fs')

let dados = {nome: felipe, idade:30}
fs.writeFileSync('dados.json', JSON.stringify(dados))

let dados_2 = JSON.parse(fs.readFileSync('dados.json').toString())
