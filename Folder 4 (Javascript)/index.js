console.log("Hello, world!");

//Redeclare Variable

//  var -- Bisa dibuat ulang
var x = 10;
var x = 20;
console.log(x); //Output: 20

let y = 10; // let -- Tidak bisa dibuat ulang

const z = 10; // const -- Tidak bisa dibuat ulang

// Hoisting

console.log(a); // Output: undefined
var a = 5; // Hoisting -- Deklarasi variabel diangkat ke atas        
let b =5;
const c= 5;

//Block Scope
{
    var varVariable = "saya var";
    let letVariable = "saya let";
    const constVariable = "saya const";
}

console.log(varVariable); // Output: saya var


//Membuat properti global
 var globalvar = "global var";
 console.log(globalvar); 

 let nonGlobalLet = "non global let"; // tidak bisa diakses diluar block scope
console.log(nonGlobalLet); // Output: ReferenceError: nonGlobalLet is not defined

const nonGlobalConst = "non global const"; // tidak bisa diakses diluar block scope
console.log(nonGlobalConst); // Output: ReferenceError: nonGlobalConst is not defined

// Let Variables TypeOf

let name = "daren";
console.log(typeof name); // Output: string

let age = 25;
console.log(typeof age); // Output: number

let valueChecked = true;
console.log(typeof valueChecked); // Output: boolean

let e = null
console.log(typeof e); // Output: object

//CONDITIONAL STATEMENT

//Contoh 1
year = 2023;
if(year > 2023){
    console.log("Tahun ini adalah 2023")
} else {
    console.log("Tahun ini adalah 2025")
}

let nilai = 80;

if (nilai <= 80) {
    console.log("Nilai Anda Cukup Baik")
} else if (nilai >= 80 ) {
    console.log("Nilai Anda Baik Sekali")
}


if (0) {
    console.log("Incorrect")
}

if (1) {
    console.log("Correct")
}

console.log(2 < 2); // Output: false
console.log(2 > 2); // Output: false
console.log(2 == 2); // Output: true
console.log(2 != 2); // Output: false
console.log(2 === 2); // Output: true
console.log(2 !== 2); // Output: false

let result = 5 < 4; // Output: false
console.log(result); // Output: false

console.log("Z" > "A"); // Output: true
console.log("A" > "Z"); // Output: false
console.log("Glow" > "Glee"); // Output: true

console.log("2" > 1); // Output: True
console.log("01" == 1); // Output: True
console.log(true == 1); // Output: True




