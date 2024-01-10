console.log('HELLO AISEE')

//Data types
// 1. Numbers
// 2. Strings
// 3. Boolean
// 4. Arrays
// 5. Objects
// 6. Undefined
// 7. Null

// Variable - container
// let, const, var
// MUTABILITY AND IMMUTABILITY 
// Mutability-- can change after creation
// Immutability-- cannot change after creation

let aisee= 'Faith Waithira'
aisee= 'Faith Mwangi'
console.log(aisee) 
console.log('aisee')

//string interpolation
const firstName= 'Faith'
const lastName= 'Mwangi'
console.log(`My name is ${firstName} ${lastName}`)

//Conditionals

const age= 17

let isAdult

if (age >= 18){
    isAdult= true
}else{ //does not have a condition
    isAdult= false
}

isAdult //output === false

//ternary expressions
const color= 'black'

let isColor;

color === 'red' ? (isColor= true) : (isColor= false)

//switch expression
const colors = 'white'
let meaning;

switch (colors){
    case 'red':
        meaning= "you are bold"
        break
    case 'blue':
        meaning= "you are cool"
        break
    case 'yellow':
        meaning= "you are bubbly"
        break
    default:
        meaning= "you are basic"
        console.log('you are basic')
        break
}

/**
 * multiline comment
 * 
 */

// this is how to start a multiline comment 