let user = {name: "Felipe", idade:30}
let string = (JSON.stringify(user))

let user2 = JSON.parse(string)

console.log(user)
console.log(string)
console.log(user2)

// ------------------------------//

function soma(a,b){
  return a+b
}

function apply (operation,a,b){
  return operation(a,b)
}

function somaX(x){
  return function(a){
    return a + x
  }
}

const sum5 = somaX(5)

console.log(sum5)

console.log(sum5(10))
console.log(apply(soma,3,4))

// ------------------------- //


let usuario = {name: "Felipe", idade:30}


function userFactory(nome, idade){
  return { nome: nome, idade: idade}

}

let felipe = userFactory("Felipe Z.", 30)

console.log(felipe)

function FactoryCreator(obj){

  let keys=[]
  if(arguments.length === 1 && typeof obj === 'object'){
    for (key in obj){
        keys.push(key)
    }    
}

  else {
    for (arg of arguments){
        keys.push(arg)
    }
  }

  return function(){
      let new_obj={}
      
      for(let i = 0; i < keys.length; i++){
        new_obj[keys[i]] = arguments[i]
      } 
  }

}



FactoryCreator(usuario)

const bookFactory = FactoryCreator(book)
const livro = bookFactory("Sitio", "Monteiro Lobato")
