// chap: 21-25 "STRINGS METHOD"
// question 1-11 done

// 12)
// var numb = 35.36;
// var convert = 3536;
// console.log(convert);

// 13)

// var specialChars = ['@', '.', ',', '!'];

// var asciiCodes = {
//   ',': 44,
//   '.': 46,
//   '@': 64,
//   '!': 33
// };

// var username = prompt("Enter a username:");

// while (specialChars.some(ch => username.includes(ch))) {
//   alert("❌ Invalid username! It contains special symbols.");

//   // Show ASCII codes
//   var codes = "ASCII Codes of restricted characters:\n";
//   for (let ch in asciiCodes) {
//     codes += `${ch} -> ${asciiCodes[ch]}\n`;
//   }
//   alert(codes);

//   // Ask again
//   username = prompt("Enter a valid username:");
// }

// alert("✅ Username accepted: " + username);

// 14)
// var A = ['apple pie','cake','cookie','chips','patties']
// var bakery =prompt("Welcome to ABC bakery. what do you want to order sir/ma'am")
// if(A = bakery){
// console.log(bakery , 'is available at index ', A.indexOf(bakery) , 'in our bakery');
// if(bakery === A){
//     console.log(bakery , 'is not available in our bakery');
// }
// }

// 15)
//  function validatePassword(password) {
//       // Rule 1: Must not start with a number
//       if (!isNaN(password.charAt(0))) {
//         alert("Password can not begin with a number\nPlease enter a valid password");
//         return false;
//       }

//       // Rule 2: Must be at least 6 characters long
//       if (password.length < 6) {
//         alert("Password must be at least 6 characters long\nPlease enter a valid password");
//         return false;
//       }

//       // Rule 3: Must contain at least one letter and one number
//       let hasLetter = /[a-zA-Z]/.test(password);
//       let hasNumber = /[0-9]/.test(password);

//       if (!(hasLetter && hasNumber)) {
//         alert("Password must contain both letters and numbers\nPlease enter a valid password");
//         return false;
//       }

//       // If all checks pass
//       alert("Password is valid!");
//       return true;
//     }

//     // Prompt user until they enter a valid password
//     let password;
//     do {
//       password = prompt("Enter password:");
//     } while (!validatePassword(password));

// 16)
// document.write('U','<br>','n','<br>','i','<br>','v','<br>','e','<br>','r','<br>','s','<br>','i','<br>','t','<br>','y','<br>',"<br>",'o','<br>','f','<br>','<br>','K','<br>','a','<br>','r','<br>','a','<br>','c','<br>','h','<br>','i','<br>',)

// 17)
// var word = prompt();
// if(word.length > 0){
//     var lastChar = word.charAt(word.length - 1);
//      document.write("user input:", word ,"<br>" , "Last character of input "+ lastChar )
// }

// 18)
    // var text = "The quick brown fox jumps over the lazy dog";

    // var matches = text.match(/the/gi);  

    // var count = matches ? matches.length : 0;

    // document.write("Text: " + text + "<br>");
    // document.write("There are " + count + " occurrence(s) of word 'the'");


// chap: 26-30 "MATH MATHODS"
// 1)
// var int = +prompt("enter a positive integar")
// document.write('number: ' ,int ,'<br>','round off value: ', Math.round(int), '<br> ','floor value: ',Math.floor(int),'<br>','ceil value: ',Math.ceil(int))

// 2)
// var int = -prompt("enter a negative floating integar")
// document.write('number: ' ,int ,'<br>','round off value: ', Math.round(int), '<br> ','floor value: ',Math.floor(int),'<br>','ceil value: ',Math.ceil(int))

// 3)
// var number = prompt();
// document.write("The absolute value of ",number ,'is ' , +(+number))

// 4)
// var dice1 = Math.round(Math.random()*7);
// var dice2 = Math.round(Math.random()*7);
// document.write("random dice value: ", dice1 , '<br>', "random dice value: ",dice2 )

// 5)
// var heads = prompt("Enter head username");
// var tails = prompt("Enter tail username");
// // var toss = Math.random();
// var round = Math.round(Math.random()*2);
// if(round = 0,2){
//     document.write(round , '<br>','Random coin value1: ' , heads);
// }
// if(round = 1){
//     document.write(round , '<br>','Random coin value2: ' , tails)
// }

// 6)
// var random = Math.round(Math.random()*100);
// document.write('Random number between 1 and 100: ',random)

// 7)
// var weight = parseInt(prompt("Enter your weight"));
// document.write("The weight of user is ",weight , " kilograms");

// 8)
// var random = Math.round(Math.random()*10);
// var userinput = +prompt("Enter a number between 1 to 10");
// var condition = false;
// if(userinput = random){
// var condition = true;
//     alert("Congratulations")
// }
// else{
// var condition = false;
//     alert('Try again')
// }