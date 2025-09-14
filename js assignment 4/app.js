// chap: 17-20 "ARRAYS AND LOOPS"
// 1,2 done
// 3)
// for(var a=1 ; a<=10 ; a++){
//     document.write(a , "<br>")
// }

// 4)
// var table = +prompt("Enter a number to show its multiplication table")
// var length = +prompt("Enter length multiplication table")
// for(var a =1 ; a<length ; a++){
//     document.write(table , "x" , a ,"=" ,table*a , "<br>")
// }

// 5)
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (var a = fruits; a === fruits; a++) {
//     document.write("Element at index", " ", [0], " ", "is ", fruits[0], "<br>", "Element at index", " ", [1], " ", "is ", fruits[1], "<br>", "Element at index", " ", [2], " ", "is ", fruits[2], "<br>", "Element at index", " ", [3], " ", "is ", fruits[3], "<br>", "Element at index", " ", [4], " ", "is ", fruits[4])
// }

// 6)
// document.write("Counting:" ,"<br>")
// for(var count = 1 ; count<=15 ; count++){
// document.write(count," ," )
// }

// document.write("Reverse Counting:" ,"<br>")
// for(var count = 10 ; count >= 1 ; --count){
// document.write(count," ," )
// }

// document.write("Even:" ,"<br>")
// for(var count = 0 ; count <= 20 ; ++count , ++count){
// document.write(count," ," )
// }

// document.write("Odd:" ,"<br>")
// for(var count = 1 ; count <= 19 ; ++count , ++count){
// document.write(count," ," )
// }

// document.write("Series:" ,"<br>")
// for(var count = 0 ; count <= 20 ; ++count , ++count){
// document.write(count,"k ," )
// }

// 7)
// var bakery = ['cake','apple pie','cookie','chips','patties'];
// var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
// var cond = false;
// for(var input = bakery ; input === bakery ; input){
//     // alert(bakery," " , "is available at index " ,[] ,"in our bakery");
//  cond = true;
//  console.log(bakery," " , "is available at index " ,[] ,"in our bakery");
 
// }
// if(cond===false){
//    console.log("we are sorry. ",input,' is not available in our bakery');
// }

// 8)
// var A = [24,53,78,91,12];
// document.write("Array Items ",A ,"<br>","The largest number is ", A[3])

// 9)
// var B = [24,53,78,91,12];
// document.write("Array Items ",B ,"<br>","The smallest number is ", B[4])

// 10)
// for(var a = 1 ; a <= 20 ; a++){
// document.write(5*a ," ")
// }


// chap: 21-25 "STRINGS METHOD"
// 1)
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// document.write(firstName ," ", lastName)

// 2)
// var mobile = prompt("enter your favorite mobile") 
// document.write("My favorite phone is: ",mobile ,"<br>", 'length of string'," " ,length.mobile);

// 3)
// var word = "Pakistani";
// document.write("String: ", word , "<br>" , "Index of 'n' is: " , [7])

// 4)
// var word = "Hello World";
// document.write("String: ", word , "<br>" , "Last Index of 'l' is: " , [9])

// 5)
// var word = "Pakistani";
// document.write("String: ", word , "<br>" , "Character at index 3: " , word[3])

// 6)
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// document.write(firstName +" "+ lastName)

// 7)
// var city = ["hyder",'islam','abad'];
// city.splice(0,3,"Islamabad");
// document.write(city);

// 8)
// var mesg = "Ali and Sami are bestfriend. They play cricket and football together.";
// document.write(mesg)


// 9)
// var numb1 = 472;
// var numb2 = "472";
// document.write("value"," ",numb2,'<br>','type',' ',typeof numb2 ,'<br>',"value"," ",numb1,'<br>','type',' ',typeof numb1 ,'<br>')

// 10)
// var input = prompt().toUpperCase();
// document.write(input)

// 11)
// var input = prompt();
// var firstChar = input.slice(0,1).toUpperCase();
// var secondChar = input.slice(1).toLowerCase();
// var thirdChar = firstChar+secondChar;
// document.write(thirdChar)




