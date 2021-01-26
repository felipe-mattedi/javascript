const ISO = require('iso-639-1')
const axios = require('axios')
const input = require ('readline-sync')

async function main(){
  let countries = await getCountries()

  let text = countries.reduce( (partialtext,country) => partialtext + `${country.name} in ${country.region} with ${country.population}\n`, '')
  console.log(text)
}

 let option
 const menu = `
 1- Filter by population
 2- Filter by region
 3- Total speakers
 4- New search
 0- Quit \n`
 
 do{
  option = input.question(menu)
  if(option === '1'){
    const population = parseInt(input.question('Takes only countries above: '))
  }
 }while(option != '0')




async function getCountries(){
     let code
     do{
      let language = input.question('Busca de pais por idioma: ')
      code = ISO.getCode(language)
     }
      while(code ==='')

      let countries = await axios.get(`https://restcountries.eu/rest/v2/lang/${code}`)
      .then( res => res.data)
      .then( data=> data.map(
        country => ({name: country.name, region: country.region, population: country.population})
      ))
      .catch( err => console.log(err))
     
      return countries

}

main()