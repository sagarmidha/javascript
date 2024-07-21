let score = "33"
console.log(typeof score);// number
// after score in string 

console.log(typeof score);// string

let value = Number(score)

console.log(typeof value); // number 

let scor="33abc"
let valu = Number(scor)
console.log(typeof valu); // number
console.log(valu); // NaN not a number


let sco= null
console.log(typeof sco); // object
let val = Number(sco)

console.log(typeof val); // number
console.log(val); //0


let sc= undefined
console.log(typeof sco); // object 
let va  = Number(sc)

console.log(typeof va); // number
console.log(va); //nan

// similary boolean passes 1 or  0 as this is conversion for number 

let isLoggedIn = ""
let booleaan = Boolean(isLoggedIn)
console.log(booleaan); // true when passes 1 or an string 
console.log(booleaan); // false when pases 0 or empty string


//similarly we can convert  any number to string 