/*let username = 'zaky'
let age = 30
let hasHobbies = false
let points = [10,20,30]
let user = {
    name: 'Miguel',
    lastName: 'Quevedo'
}
const PI = 3.14159

console.log(age)
console.log(hasHobbies)
console.log(points)
console.log(user)
console.log(PI)*/

/*const age = 23
if(age >= 18){
    console.log('Adulto')
}else if (age >= 13){
    console.log('Teenager')
}else{
    console.log('Infantil')
}*/

function showUserInfo(userName, userAge) {
  return `the userName is ${userName}, the user  is ${userAge} years old`;
}

console.log(showUserInfo("zaky", 30));
console.log(showUserInfo("Miguel", 20));
