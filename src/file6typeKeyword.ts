type UserName = string | number

let user:UserName = "salman" // valid -> string
user = 7 // valid -> number
// user = true // in valid -> boolean

// type example with function

type Multiply = (a:number, b:number) => number
const mulFunc:Multiply = (a,b)=>{
    return a * b
}