// Primitives: number, string, boolean.
// More complex types: arrays, objects.
//Function types, parameters

//Primitives
let age: number

age = 12

let userName : string

userName = 'Alex'

let isInstructor: boolean

isInstructor = true

// More complex

let hobbies: string[]

hobbies = ['Sports', 'Cooking']

// type Alias

type Person = {
    name: string,
    age: number
}

// let person: { name: string, age: number}
let person : Person

person = {
    name: 'Alex',
    age: 32
}

// let people: {name: string, age: number}[]
let people: Person[]

people = [{name: 'Alex', age: 30}]

// Type inference

let course: number |string = 'React - The complete guide.'

course = 123

// Function y types

function add(a: number| string, b: number|string) {
    return +a + +b
}

add(4, '5')

// Generics

function insertAtBeginning<Type>(array: Type[], value: Type){
    const newArray = [value, ...array]
    console.log(array.length)
    return newArray
}

const demoArray = ['1','2','3']

const updatedArray = insertAtBeginning(demoArray, '-1')