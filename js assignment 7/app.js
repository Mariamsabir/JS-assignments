// chap:35-38 "Functions"
// Ques 1-4 done
// 5)
// function square(numb){
// return numb*numb
// }
// var result = square(+prompt())
//  document.write("The square is: " + result);
// square()

// 6)
// function factorial(n) {
//   if (n < 0) {
//     return "Factorial is not defined for negative numbers.";
//   }
//   var result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// var num = 5;
// document.write("Factorial of " + num + " is: " + factorial(num));
// factorial()

// 7)
// var starting = +prompt("Enter start counting number")
// var ending = +prompt("Enter end counting number")
// function number() {
//     for (var a = starting; a <= ending; a++) {
//         document.write(a, "<br>")
//     }
// }
// number();

// 8)
// var base = +prompt("Enter a base value");
// var perp = +prompt("Enter a perp value");
// var base2 = base*base; 
//  var perp2 = perp*perp;
// function square(){
// console.log(base2 , perp2);
// }
// square()
// function hyp(){
//     var hypo = base2+perp2
// console.log(hypo*hypo);
// }
// hyp()

// 9)
// function area(height, width) {
//     var Area = height * width;
// console.log(Area);
// }
// area(10, 20);

// 10)
// var word = prompt("Enter a word");

// var length = word.length;

// var reverse = "";

// for (var i = length - 1; i >= 0; i--) {
//   reverse = reverse + word[i];
// }

// if (reverse === word) {
//   console.log("it's a palindrome word");
// } else {
//   console.log("it's not a palindrome word");
// }

// 11)
// var word1 = "the";
// var one = word1.slice(0,1).toUpperCase() +  word1.slice(1,3).toLowerCase();
// var word2 = "quick";
// var two = word2.slice(0,1).toUpperCase() +  word2.slice(1).toLowerCase();
// var word3 = "brown";
// var three = word3.slice(0,1).toUpperCase() +  word3.slice(1).toLowerCase();
// var word4 = "fox";
// var four = word4.slice(0,1).toUpperCase() +  word4.slice(1).toLowerCase();
// console.log(one + " "+ two + " "+three+ " "+ four);

// 12)
// function dev(){
// var word = "Web Development Tutorial";
// var copy = word.slice(4,15);
//     console.log(copy);
// }
// dev()

// 13)
// function argu(word,word2){
//     console.log(word,word2); 
// }
// argu( "'JSResourceS.com'", "'o'"  )

// ques 14 index file

// chap:38-42 
// 4)
// function average(m1, m2, m3) {
//     return (m1, m2, m3) / 3
// }
// function percentage(m1, m2, m3) {
//     var totalMarks = 300
//     var obtained = (m1 + m2 + m3);
//     return (obtained / totalMarks) * 100
// }
// function mainFunction(m1, m2, m3) {
//     var avg = average(m1, m2, m3);
//     var perc = percentage(m1, m2, m3);
//     console.log("Marks: ", m1, m2, m3);
//     console.log("Average:", avg.toFixed(2));
//     console.log("Percentage:", perc.toFixed(2) + "%");
// }
// mainFunction(86,75,81
// )


// 5)
// function myIndexOf(str, char) {

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(myIndexOf("mariam", "a"));
// console.log(myIndexOf("mariam", "h"));
// console.log(myIndexOf("mariam", "i"));


// 6)
// function removeVowels(sentence) {
//     var result = "";
//     var vowels = "aeiouAEIOU";

//     for (var i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }
//     return result;
// }

// console.log(removeVowels(prompt()));
// console.log(removeVowels(prompt()));

// 7)

//  function countSuccessiveVowels(text) {
//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {
//         var firstChar = text[i].toLowerCase();
//         var secondChar = text[i + 1].toLowerCase();

//         switch (true) {
//             case (isVowel(firstChar) && isVowel(secondChar)):
//                 count++;
//                 break;
//         }
//     }

//     return count;
// }

// function isVowel(ch) {
//     switch (ch) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }

// var line = "Pleases read this application and give me gratuity";
// console.log("Occurrences of successive vowels:", countSuccessiveVowels(line));


// 8)
// var distance = +prompt("Enter distance between two cities(in km)")
// var meter = distance*1000;
// var centimenter = distance*100000;
// var feet = distance*3280.839895;
// var inches = distance*39370.07874;
// function met(){
//     console.log(meter);
// }
// function centi(){
//     console.log(centimenter);
// }
// function ft(){
//     console.log(feet);
// }
// function inch(){
//     console.log(inches);
// }
// met();
// centi();
// ft();
// inch();

