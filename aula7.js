//Funções 

function sayhello(entrada){
  console.log("Say Hello " + entrada)
}

sayhello("Socorro!")

function soma(a,b){
  let c = a + b
  return c

}

function soma(a,b=10){
  let c = a + b
  return c

}

// para importar  ->   import soma from 'aula7.js'

// funções anônimas

const somar2 = function(a,b){
  return a+b
}

resultado = somar2(2,3)

const somar3 = (a,b)=>a+b
somar3(5,1)

const somar3 = (a,b)=>{
  return a+b}


function fatorial(num){
  if (num <=1) return 1    //caso base - para parar o loop

  return num*fatorial(num-1)
}