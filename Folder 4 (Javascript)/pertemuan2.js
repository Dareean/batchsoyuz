// // FOR LOOP

// for(let i = 0; i < 5; i++) {
//     console.log("ini adalah interval ke - " + (i + 1) + ". NIlai adalah = " + i);
// }

// // WHILE LOOP
// let i = 0; // NIlai Awal
// while (i < 5) {
//     console.log("ini adalah interval ke - " + (i + 1) + ". NIlai adalah = " + i); // Statement
//     i++ // Increment Expression
// }

// // TEBAK BUAH
// let jawaban = "";
// while (jawaban !== "apel") {
//     jawaban = prompt("Tebak buah yang saya pikirkan: ");
// }
// alert("BETUl!");        

// // BREAK

// for (let i = 1; i <= 5; i++) {
//     for (i === 3;) {
//         break;
//     }
//     console.log(i);
// }

// // INFINITE LOOP 
// for (var i = 10; i <= 10; i--) {
//     console.log(i);
// }

// // NESTED LOOP
// for (let baris = 1; baris <= 2; baris++) {
//     for(let kolom = 1; kolom <= 3; kolom++) {
//         console.log("Baris ke-" + baris + " Kolom ke-" + kolom);
//     }
// }

// // PRINTING PATERN 
// for (let i = 1; i <= 5; i++) {
//     let str = ""; // Initialize an empty string for each row
//     for (let j = 1; j <= i; j++) {
//         str += "*"; // Append "*" to the string
//     }
//     console.log(str); // Print the string for the current row
// }


//                          FUNCTIONS                               //
// // DEKLARASI FUNCTION
// function sayHello() {
//     console.log("Hello, World!");
// }
// sayHello(); // Call the function to execute it


// // FUNCTION WITH PARAMETER
// function addTwoNumber(FirstNumber, SecondNumber) {
//     let result = FirstNumber + SecondNumber;
//     console.log(result); // This line will not be executed
// }

// addTwoNumber(2, 3); // Call the function with arguments 2 and 3

// // ANONYMOUS FUNCTION
// const anonymous = function(name) {
//     return 'hello' + name;
// } 
// console.log(anonymous("John")); // Output: hello John

// ARROW FUNCTION
// const isBlueColor = color => {
//     if (color === "blue") {
//         return 'This color is blue';
//     } else {
//         return 'This color is not blue';
//     }
// }
// console.log(isBlueColor("red")); // Output: This color is not blue
// console.log(isBlueColor("blue")); // Output: This color is blue

// // return an object 
// const getProfileObject = (firstName, lastname) => {
//     return {
//         firstName: firstName,
//         lastName: lastname,
//         fullName: function() {
//             return this.firstName + " " + this.lastName;
//         }
//     };
// }
// console.log(getProfileObject("John", "Doe").fullName()); // Output: John Doe

// // BUILD IN FUNCTION
// let myAction = "I am learning JavaScript";
// console.log(myAction.length);
// console.log(myAction.toUpperCase()); // Output: I AM LEARNING JAVASCRIPT
// console.log(myAction.toLowerCase()); // Output: i am learning javascript
// console.log(myAction.split(" ")); // Output: [ 'I', 'am', 'learning', 'JavaScript' ]
// console.log(myAction.split("a")); // Output: [ 'I', 'am', 'learning', 'JavaScript' ]
// console.log(myAction.indexOf("JavaScript")); // Output: 10
// console.log(myAction.substring(0, 4));


let pass = 123456789;
// console.log(typeof pass); // Output: number
// pass = String(pass); // Convert to string
// console.log(typeof pass); // Output: string
console.log(Math.random()); // Output: Random number between 0 and 1
console.log(Math.round(0.9)); // Output: 1
console.log(isNaN("123")); // Output: false
console.log(isNaN("abc")); // Output: true
console.log(isNaN(123)); // Output: false
