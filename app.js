// question 1 
// document.write("<h1>Result</h1><br>")
// var a = +prompt("ENter Number")
// document.write("The value of a is ",a,"<br>")
// document.write("-------------------------<br>")
// document.write("The value of ++a is ",++a,"<br>")
// document.write("The value of a is ",a,"<br><br>")
// document.write("The value of a++ is ",a++,"<br>")
// document.write("The value of a is ",a,"<br><br>")

// document.write("The value of --a is ",--a,"<br>")
// document.write("The value of a is ",a,"<br><br>")
// document.write("The value of a-- is ",a--,"<br>")
// document.write("The value of a is ",a,"<br><br>")

// question 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<p>a: " + a + " (After decrementing 'a', a becomes 1)</p>");        
// document.write("<p>b: " + b + " (After decrementing 'b', b becomes 0)</p>");       
// document.write("<p>result: " + result + " (After incrementing 'b', result becomes 3)</p>");  
// document.write("<p>Further Explanation: b-- uses b and then decrements it. So, b becomes 0 after this operation.</p>");  


// question 3
// var name = prompt("Please enter your name:");
// document.write("<h1>Hello, " + name + "!</h1>");

// // question 4
// var number = prompt("Please enter a number:");
// number = number ? parseInt(number) : 5;
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }


//question 5
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarks = 100;
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
//question 6
document.write("<h2>Result</h2>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("</table>");

document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");

