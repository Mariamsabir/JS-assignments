// chap: 9-11  USER INPUT AND CONDITIONAL STATEMENT

// 1)
// var city = prompt("enter your city");
// if(city == "karachi"){
//     console.log("welcome to city of lights");
// }

// 2)
// var gender = prompt("enter your gender");
// if(gender === "male"){
//     console.log("WELCOME SIR");
// }
// else{
//     console.log("WELCOME MAAM");
    
// }

// 3)
// var signal = prompt("enter signal")
// if(signal === "red"){
// console.log("Must Stop");}
// else if(signal === "yellow"){
// console.log("Ready To Move");
// }
// else if(signal === "green"){
// console.log(" Move Now");
// }

// 4)
// var fuel = +prompt("enter remaining fuel in car")
// if(fuel <= 0.25){
//     console.log("Please refill the fuel in your car");
// }

// 5)
// A: var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// B: var b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true");
// } 

// C: var c = 12;
// if(c++ === 13){
//     alert("condition 1 is true")
// }
// if(c === 13){
//     alert("condition 2 is true")
// }
// if(++c < 14){
//     alert("condition 3 is true")
// }
// if(c === 14){
//     alert("condition 4 is true")
// }

// D: var materialcost = 20000;
// var laborcost = 2000;
// var totalcost = materialcost + laborcost;
// if(totalcost === laborcost + materialcost){
//     alert("The cost equals");
// }

// e: if(true){
//     alert("True")
// }
//  if(false){
//     alert("False")
// }

// f: if ("car" < "cat"){
//     alert("car is smaller than cat")
// }


// 6)
// code index file

// 7)
// var guess = +prompt("guess the secret number")
// if(guess > 1 || guess <= 10){
//     alert("Bingo! correct answer")
// }
// else if (guess == 1){
//     alert("close enough to the correct answer")
// }

// 8)
// var weather = +prompt("check weather")
// if(weather / 3){
//     alert("The given number is divisble by 3")
// }
// else{
//     alert("The number isn't visible by 3")
// }

// 9)
// var num = prompt("Enter a number:");

// // Convert the input to a number
// num = Number(num);

// // Check if the input is a valid number
// if (isNaN(num)) {
//     console.log("Please enter a valid number.");
// } else {
//     if (num % 2 === 0) {
//         console.log(num + " is an even number.");
//     } else {
//         console.log(num + " is an odd number.");
//     }
// }


// 10)
// var temp = +prompt("enter temperature");
// if(temp > 40 ){
//     alert("it is too hot outside");
// }
// else if(temp > 30 ){
//     alert("The weather today is normal");
// }
// else if(temp > 20 ){
//     alert("Today's weather is cool");
// }
// else if(temp > 10 ){
//     alert("OMG! Today's weather is so cool");
// }

// 11)
// Take inputs from the user
// var numb1 = +prompt("Enter the first number:");
// var numb2 = +prompt("Enter the second number:");
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;
// if(operation === "+"){
//     result = numb1 +numb2;
// }
// else if(operation === "-"){
//     result = numb1 - numb2;
// }
// else if(operation === "*"){
//     result = numb1 * numb2;
// }
// else if(operation === "/"){
//     if (numb2 !== 0){
//     result = numb1 / numb2;}
// else {
//     result = "error! division by zero"
// }
// }
// else if(operation === "%"){
//     if (numb2 !== 0){
//     result = numb1 % numb2;}
// else {
//     result = "error! division by zero";
// }
// }
// else{
//     result = "invalid operation"
// }
// alert("the result is " + result)



// chap: 12-13 IF...ELSE AND ELSE IF STATEMENT , TESTING SET OF CONDITIONS
// 1)
// var input = prompt("Enter a single character:");

// if (input.length !== 1) {
//     console.log("Please enter exactly one character.");
// } else {
//     // Get ASCII code of the character
//     var ascii = input.charCodeAt(0);

//     // Check if it is a number (0-9)
//     if (ascii >= 48 && ascii <= 57) {
//         console.log("The character is a number.");
//     }
//     // Check if it is an uppercase letter (A-Z)
//     else if (ascii >= 65 && ascii <= 90) {
//         console.log("The character is an uppercase letter.");
//     }
//     // Check if it is a lowercase letter (a-z)
//     else if (ascii >= 97 && ascii <= 122) {
//         console.log("The character is a lowercase letter.");
//     }
//     // If it is none of the above
//     else {
//         console.log("The character is neither a number nor an English letter.");
//     }
// }


// 2)
// var num1 = prompt("Enter the first integer:");
// var num2 = prompt("Enter the second integer:");

//  if (num1 > num2) {
//         console.log("The larger number is: " + num1);
//     } else if (num2 > num1) {
//         console.log("The larger number is: " + num2);
//     } else {
//         console.log("Both numbers are equal.");
//     }


// 3)
// var number = +prompt("Enter a number:");
// number = Number(number);
// if (isNaN(number)) {
//     console.log("Please enter a valid number.");
// } else {
//     if (number > 0) {
//         console.log("The number is positive.");
//     } else if (number < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }


// 4)
// var character = prompt();
// if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
//     alert("true")
// }
// else{
//     alert("false")
// }


// 5)
// var passward = +prompt("enter passward")

// if(passward === 365169){
//     alert("Correct! The passward you entered matches the original passward")
// }
// else if (passward !== 365169){
//     alert("Incorrect passward");
// }
// else{
//     alert("please enter your passward")
// }

// 6)
// var greeting ;
// var hour = +prompt();
// if (hour < 18){
//     greeting = "good day";
// }
// else{
//     greeting = "good evening";
// }
// alert(greeting)


