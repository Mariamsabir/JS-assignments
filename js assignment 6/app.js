// chap: 31-34 "DATE METHODS"
// 1)
// var date = new Date();
// document.write(date)

// 2)
// var month = new Date();
// var allmonths = ["January",'February','March','April','May','June','July','August','September','October','November','December']
// document.write("current month: " , allmonths[11])

// 3)
// var days = ['monday','Tuesday','wednesday','thursday','friday','saturday','Sunday']
// document.write('Today is ',days[1].slice(0,3))

// 4)
// var day = ['saturday','sunday'];
// var promp = prompt("enter a day")
// if(day = promp){
// document.write("It's fun day")
// }
// else{
//     document.write("no")
// }

// 5)
// let today = new Date();
// let dayOfMonth = today.getDate(); 

// if (dayOfMonth < 16) {
//   document.write("First fifteen days of the month");
// } else {
//   document.write("Last days of the month");
// }


// 6)
// var currentdate = new Date();
// document.write("CurrentDate: " , currentdate , '<br>');
// var date = new Date().getTime();
// document.write("Elapsed milliseconds since january 1, 1970: ", date , '<br>');
// var minutes = Math.round(date / (1000*60*60));
// document.write("Elapsed minutes since january 1, 1970: ", minutes);

// 7)
// var date = new Date();
// if(date >= 12){
// alert("it's PM")
// }
// else{
//     alert("it's AM")
// }

// 8)
// var date = new Date("31 dec 2020");
// document.write("Later date: ", date)

// 9)
//  var RamadanMilliSec = new Date("Feb 17 2026").getTime();

//   var currentMilliSec = new Date("june 18 , 2015").getTime();

//   var diff = RamadanMilliSec - currentMilliSec;

//   var month = Math.round(diff / (1000 * 60 * 60 * 24));

// document.write(month , ' days have passed since 1st ramadan, 2015');

// 10)
// var date = new Date();
// var seconds = Math.round(date / (1000*60))
// document.write("On refernce date " ,date ,", " , seconds , " seconds had passed since beginning of 2015")

// 11)
// var currentdate = new Date();
// var currentHours = currentdate.getHours();
// var date = new Date()
// currentdate.setHours(currentHours - 1);
//   alert(
//         "Current hour: " + date +
//         "\n1 hour Back: " + currentdate
//       );


// 12)

    //   var currentDate = new Date();

    //   var pastDate = new Date(currentDate);

    //   pastDate.setFullYear(currentDate.getFullYear() - 100);

    //   alert(
    //     "Current Date: " + currentDate +
    //     "\n100 Years Back: " + pastDate
    //   );

// 13)
// var age = +prompt("Enter your age");
// var currentyear = new Date().getFullYear();
// var birthyear = currentyear - age;
// alert(birthyear);

// 14)
// var numberOfUnits = 410;
// var chargesPerUnit = 16;
// var lateBill = 350;
// var netAmount = numberOfUnits * chargesPerUnit;
// var grossAmount = netAmount + lateBill
// document.write("<h1>K-Electric Bill</h1>",'<br>'
//     , "Customer name: ABC Customer", "<br>", "Month: september","<br>",
//     "Number of units: ",numberOfUnits ,'<br>', "Charges per unit: ",chargesPerUnit,'<br>','<br>',
//     "Net amount payable (within due date): ",netAmount,"<br>",
//     "Late payment surcharge: ",lateBill,"<br>",
//      "Gross amount payable (after due date): ",grossAmount
// )


// chap:35 
// 1)
// var date = new Date();
// document.write(date);

// 2)
// function greet(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name")
// console.log('Fullname: ',firstName+lastName);
// }
// greet();

// 3)
// function greet(){
//     var numb1 = +prompt("enter first number");
//     var numb2 = +prompt("Enter second number");
//     console.log("number: ",numb1+numb2);
// }
// greet();

// 4)
// function caculator(){
//     var numb1 = +prompt("Enter the first number:");
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
// }
// caculator();
