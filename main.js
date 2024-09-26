// 9/26/2024


// function multiplyByFour() {
//     return 10*4
// }

// console.log(multiplyByFour);

// arrow funstions and function declarations are the 2 most common

// function declarations are good for React
// arrows are good for callback functions

// const multiplyByFour = () => 10 * 4
// const multiplyByFive = () => {
//     return 10*5
// }
// console.log(multiplyByFive())
// // => 50
// console.log(multiplyByFour());

// the moment the arrow is not a onle liner, you have to put brackets in the return

// 1st class citizens 
// anything that be done w/ values and dataypes, can be done w/ functions

// create a hello world function
// const HeW = () => 'Hello World'
// console.log(HeW());
// function greet () {
//     return 'Hello World';
// }
// console.log(greet())
// this is called invoking aka calling the function

// write a function that prints every number b/w 1 and 100

// function allNum() {
//     for (let i=0; i<=100; i++){
//      console.log(i)}
// }

// allNum()

// write a function that loops over the array of learners
// and prints out name and class rtt-119
// const learners =[
//     'Eli',
//     'John',
//     'Charles',
//     'Denisse',
//     'Aaron',
//     'Malik',
//     'Flori',
//     'Kevin',
//     'Justin W',
//     'Justin M',
//     'Kathy',
//     'Victoria',
//     'Lynda',
//     'Rei',
//     'Han',
//     'Thalia',
//     'Jeff',
//     'Ashley',
//     'Chris',
//     'Fanta'
// ]

// function people(){
//     for (let i=0; i<learners.length; i++){
//         console.log(`${learners[i]} is in class 1A.`)
//     }
// }

// people()



// #1 

// function greaterNum(num1, num2){
//     num1 > num2 ? console.log(num1) : console.log(num2);
// }

// greaterNum(7,12)

// #2
// function calculateDogAge(age){
//     pupAge = age*7
//     console.log(`Your dog is ${pupAge} years old in dog years`)
// }
// calculateDogAge(7)
// // =>Your dog is 49 years old in dog years

// #3
//DrEvil
//create a function called DrEvil. It should take a single argument, an amount
//and return '<amount> dollars', except it will add '(pinky)' at the end if
//the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)
// answer below:
// function drEvil (num) {
//     console.log (num === 1000000)
//     num === 1000000 ? console.log (${num} dollars pinky) : console.log(${num} dollars)
// }
// drEvil(1000000)

// #4 Thalia
// function calculateSupply(age,perDay){
//     let aAppleAday = perDay*365
//     console.log(`You will need ${aAppleAday} apples to last you until the age of ${age}.`)

// }

// calculateSupply(5, 10)
// =>You will need 3650 apples to last you until the age of 5

//Exercise #5
//http://math2.org/math/geometry/circles.htm
//
//Create 2 functions that calculate properties of a circle:
//First: Create a function called calcCircumference
// - Pass the radius to the function
// - Calculate the circumference based on the radius
// - and output " The circumference is SOMETHING"
// Second: Create a function called calcArea:
// - Pass the radius to the function
// - Calculate the area based on the radius and output "The area is SOMETHING"
// function calcCircumference(radius){
//     let pi = 3.14
//     let circumference = Math.round(2 * pi * radius)
//     //Math.round(circumference)
//     return The circumference is ${circumference} inches.
//     }
//     console.log(calcCircumference(5));

// }

// #6 Thalia
// function celsiusToFahrenheit(Cdegrees){
//     let CtoF= (Cdegrees*9/5)+32
//     console.log(`${Cdegrees} degrees celsius is ${CtoF} degrees Farenheit.`)
// }

// celsiusToFahrenheit(12)

// function fahrenheitToCelsius(Fdegrees){
//     let FtoC= (Fdegrees-32)*5/9
//     console.log(`${Fdegrees} degrees fahrenheit is ${FtoC} degrees Celsius.`)
// }

// fahrenheitToCelsius(80)

// #7
// function threeNum(num1, num2, num3) {
//     letAnswer = (num1*num2)**num3
//     console.log(letAnswer)
// }

// threeNum(1,2,3)

// #8
// function mixUp(str1, str2) {
//     console.log(str1[2])
//     let mix1 = `${str2.slice(0,2)}${str1.slice(2, -1)}${str1[str1.length - 1]}`
//     let mix2 = `${str1.slice(0,2)}${str2.slice(2, -1)}${str2[str2.length - 1]}`
//     // let mix2 = str2.slice(0,2)
//     let statement = `${mix1}  ${mix2}`
//     console.log(statement);
//     console.log(mix2);
// }
// mixUp('lemonade', 'droppings')
// mixUp('jeffffrey', 'chaucer')

// #9
// JOHN
// function fixStart(arg){
//     let firstChar= arg.charAt(0)
//     for (i=0; i<arg.length; i++) {
//         if (arg.charAt(i) === firstChar){

//         }
//     }
//     console.log(firstChar)
// }
// fixStart('triple')

// // ME
// function fixStart(arg){
//     let newStr = arg.replace('bb', '**')
//     console.log(newStr)
// }
// fixStart('babble')
// // => ba**le

// CHARLES
// function fixStart(a) {
//     a_array = a.split("");
//     // console.log(a_array);
//     for (let i = 1; i < a.length; i++) {
//       if (a[i] == a[0]) {
//         a_array[i] = "*";
//       }
//     }
//     return console.log(a_array.join(""));
//   }