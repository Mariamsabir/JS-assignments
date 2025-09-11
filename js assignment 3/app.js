// chap: 14-16 "ARRAY"
// 1)
// var students = [];
// students.push("mariam")
// students.push("fatima")
// console.log(students);

// 2)
// var students = [];
// students.splice(0,1 , "mariam" , "fatima" ,'ali', 'sara')
// console.log(students);

// 3)
// var strings = ["sara", '123','ali']
// console.log(strings);

// 4)
// var numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers);

// 5)
// var boolean = [0,1,1,0,1,0,0,1]
// console.log(boolean);

// 6)
// var mixed = ["sara",12435,'ali',0,1,'mariam']
// console.log(mixed);

// 7)
// document.write("<h1>Qualification</h1>", "<br>")
// document.write("<ol><li>SSC</li><li>HSC</li><li>BCS</li><li>BS</li><li>BCOM</li><li>MS</li><li>M.PHIL</li><li>PHD</li></ol>")

// 8)
// var students = ["Michael","John",'Tony'];
// var score = [320,230,480];
// document.write("Score of Michael is "+ score[0] + " . " + "percentage is: " + 320/500 *100 +"<br>")
// document.write("Score of John is "+ score[1] + " . " + "percentage is: " + 230/500 *100 +"<br>")
// document.write("Score of Tony is "+ score[2] + " . " + "percentage is: " + 480/500 *100)

// 9)\

// document.write("<h2>Color Array Operations</h2>");
// document.write(<p id="result"></p>);


//     // Step 1: Initialize array
//     var colors = ["Red", "Green", "Blue"];
//     document.getElementById("result").innerHTML += "<b>Initial Array:</b> " + colors + "<br>";

//     // a. Add color to the beginning
//     let startColor = prompt("Enter a color to add at the beginning:");
//     colors.unshift(startColor);
//     document.getElementById("result").innerHTML += "<b>After adding at beginning:</b> " + colors + "<br>";

//     // b. Add color to the end
//     let endColor = prompt("Enter a color to add at the end:");
//     colors.push(endColor);
//     document.getElementById("result").innerHTML += "<b>After adding at end:</b> " + colors + "<br>";

//     // c. Add two colors to the beginning
//     let color1 = prompt("Enter first color to add at beginning:");
//     let color2 = prompt("Enter second color to add at beginning:");
//     colors.unshift(color1, color2);
//     document.getElementById("result").innerHTML += "<b>After adding two more at beginning:</b> " + colors + "<br>";

//     // d. Delete the first color
//     colors.shift();
//     document.getElementById("result").innerHTML += "<b>After deleting first color:</b> " + colors + "<br>";

//     // e. Delete the last color
//     colors.pop();
//     document.getElementById("result").innerHTML += "<b>After deleting last color:</b> " + colors + "<br>";

//     // f. Add color at specific index
//     let indexAdd = +prompt("Enter the index where you want to add a color:");
//     let newColor = prompt("Enter the color name to add:");
//     colors.splice(indexAdd, 0, newColor);
//     document.getElementById("result").innerHTML += "<b>After adding at index " + indexAdd + ":</b> " + colors + "<br>";

//     // g. Delete color(s) from specific index
//     let indexDelete = +prompt("Enter the index from where you want to delete color(s):");
//     let countDelete = +prompt("Enter how many colors you want to delete:");
//     colors.splice(indexDelete, countDelete);
//     document.getElementById("result").innerHTML += "<b>After deleting " + countDelete + " color(s) from index " + indexDelete + ":</b> " + colors + "<br>";
 

// 10)
// var score = [320,230,480,120];
// document.write("scores of students is: " + score + "<br>")
// score = [120,230,320,480]
// document.write("Ordered scores of students is: " + score)

// 11)
// var cityName = ["Karachi","Lahore",'Peshawar','Islamabad','Quetta']
// var copy = cityName.slice(3,2)

// document.write("Cities:" + "<br>" , cityName , "<br>", "<br>" , "Selected Cities list:" , "<br>", "Islamabad ,","Quetta")

// 12)
// var array = ['This', 'is', 'my', 'cat'];
// var sentence = array.join(" ");
// console.log
// (sentence); 

// 13)
// var device = ['Keyboard','Mouse','Printer','Moniter']
// device.shift();
// device.shift();
// device.shift();
// device.shift();
// document.write("devices", '<br>', device)

// 14)
// var device = ['Keyboard','Mouse','Printer','Moniter']
// device.pop();
// device.pop();
// device.pop();
// device.pop();
// document.write("devices", '<br>', device)

// 15)
//  var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

//         document.write("<select>");

//         for (var i = 0; i < manufacturers.length; i++) {
//             document.write("<option>" + manufacturers[i] + "</option>");
//         }

//         document.write("</select>");



// chap : 17-
// 1)
// var arr = [];
// arr.push([]);
// arr = [10];
// console.log(arr)

// 2)
// var matrix = [];

// var matrix2 = Array.from({ length: 3 }, () => Array(3).fill(0));
// console.log(matrix2);
// var matrix = [];

// var matrix3 = Array.from({ length: 3 }, () => Array(3).fill(0));
// console.log(matrix3);var matrix = [];

// var matrix4 = Array.from({ length: 3 }, () => Array(3).fill(0));
// console.log(matrix4);