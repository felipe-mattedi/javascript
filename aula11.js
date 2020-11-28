const axios = require('axios')
const sleep = require('sleep')
var entrada = require('readline-sync')
const apiId = '5d0b33a3adaa365fb1561a27d2baade8'
var cidade = entrada.question('Digite a cidade: ')

var resultado = consultaclima(cidade)


async function consultaclima(cidade){
let url=`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiId}&units=metric&lang=pt_br`

let response = await axios.get(url)


 const {main} = response.data

console.log(main.temp)

}



