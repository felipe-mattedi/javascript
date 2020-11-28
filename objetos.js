let user = {
name: "Felipe",
email: "felipe.mattedi@gmail.com",
password: "000000",
age:30,
pets: [
  {name:'gaspar', age:2},
  {name:'hermes', age:3},
]
}


console.log(user.pets[1].name)

let { email } = user

console.log(email)