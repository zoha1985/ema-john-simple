// variable diclearation
let money = 20;
console.log(money);
money = 50;
console.log(money);

const name ='shumsuzzoha';
console.log(name);
const person = {
    name : 'zoha',
    age : 36,
    city : 'khulna'

}
const yourname = person.name;
const yourage = person.age;
const yourcity = person.city;
console.log('your name is : '+ yourname +' ' + yourage);

// template string

const statement = `this persone name is :  ${person.name} and this persone age is :  ${person.age}`;
console.log(statement);

// conditional works
const age = 36;

if(money > 51 && age > 35){
    console.log('your statement is true')

}else{
console.log('your statement is false')
}

// array statement

const number =[34,55,67,89];
const respect = ['mamun', 'hera','chunni','panna'];
const products = [{name:'Hera', price: 1000}, {name:'Ripa', price:40}, {name:'daimond',price: 30}]


console.log(products[0])
console.log(respect[1])
console.log(number[1])

// loop statement

for (let i = 0; i < number.length; i++) {
    const num = number[i];
     
    console.log(num);
    
}

// sumple function

function add(num1,num2){
    return num1 + num2;
}
const  result = add(89,90);
console.log(result)

// arrow function

const fivetime = (number1,number2 = 10) => number1 + number2;
const restu = fivetime(10)
console.log(restu)



