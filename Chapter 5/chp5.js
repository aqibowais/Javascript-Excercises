//chapter 5
// question 1 and 2
var a = +prompt("Enter first number")
var b = +prompt("Enter Second number")
var result1 = a+b
var result2= a-b
var result3 = a/b
var result4 = a%b
document.write("The Addition result of " , a , " and " , b ," is " , result1 + "<br>")
document.write("The Subtraction result of " , a , " and " , b ," is " , result2 + "<br>")
document.write("The Divison result of " , a , " and " , b ," is " , result3 + "<br>")
document.write("The Modulo result of " , a , " and " , b ," is " , result4 + "<br>")

// question 3
var num;
document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num += 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is: " + remainder);


// question 4
var ticket = 600
document.write("Total cost to buy 5 tickets of a movie is ",ticket*5,"PKR")

// question 5
var number = prompt("Enter a number to display its multiplication table:");
number = parseInt(number);

if (!isNaN(number)) {
    document.write("<h2>Multiplication Table of " + number + "</h2>");
        for (var i = 1; i <= 10; i++) {
        document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }
} else {
    alert("Invalid input. Please enter a valid number.");
}

// question 6
var celsiusTemp = 25;

var fahrenheitTemp = (celsiusTemp * 9/5) + 32;

document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F.<br>");

var fahrenheitTemp2 = 77;

var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C.");

// question 7
var item1Price = 25; 
var item2Price = 35;
var item1Quantity = 2; 
var item2Quantity = 1; 
var shippingCharges = 5;

var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("<p>Price of Item 1: " + item1Price.toFixed(2) + "</p>");
document.write("<p>Ordered Quantity of Item 1 is 2 </p>");
document.write("<p>Price of Item 2: " + item2Price.toFixed(2) + "</p>");
document.write("<p>Ordered Quantity of Item 2 is 1 </p>");
document.write("<p>Shipping Charges: " + shippingCharges.toFixed(2) + "</p>");
document.write("<h3>Total Cost: " + totalCost.toFixed(2) + "</h3>");

// question 8
var totalMarks = +prompt("Total marks?")
var marksObtained = +prompt("Marks Obtained?")
var percentage = (marksObtained/totalMarks )* 100
document.write("<h2>MarkSheet</h2>");
document.write("<p>Total Marks : ",totalMarks ," </p>");
document.write("<p>Marks Obtained : ",marksObtained ," </p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "</p>");

// question 9
var usdToPkrRate = 104.80; 
var sarToPkrRate = 28; 
var usdAmount = 10; // Amount in US dollars
var sarAmount = 25; // Amount in Saudi Riyals
var totalPkr = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);
document.write("<h2>Total Currency in Pakistani Rupees: " + totalPkr.toFixed(2) + " PKR</h2>");

//Question : 10
var number = prompt("Enter any number to perform arithemetic operation")
var arithemetic = number + 5 * 10 / 2
document.write(arithemetic)

// question 10
// Age Calculator
const currentYear = new Date().getFullYear();
const birthYear = 2003; 
const age1 = currentYear - birthYear;
const age2 = age1 - 1;

document.write("Current Year" , currentYear)
document.write("Birth Year" , birthYear)
document.write("Your Age" , age1)

// question 11
//The Geometrizer
const radius = +prompt("Enter Radius of a circle : "); 
const circumference = 2 * Math.PI * radius;
const area = Math.PI * radius ** 2;
document.write(<p>The Radius is ${radius}</p>);
document.write(<p>The circumference is ${circumference.toFixed(2)}</p>);
document.write(<p>The area is ${area.toFixed(2)}</p>)

// question 12
// The Lifetime supply calculator
const favoriteSnack = "chocolate bars";
const currentAge = 30; 
const maximumAge = 80; 
const snacksPerDay = 2; 
const yearsRemaining = maximumAge - currentAge;
const snacksNeeded = yearsRemaining * 365 * snacksPerDay;

document.write("<h2>The Lifetime supply calculator</h2>")
document.write("favorite Snack : ", favoriteSnack ,"<br>")
document.write("current Age : ", currentAge ,"<br>")
document.write("maximum Age : ", maximumAge ,"<br>")
document.write("snacks Per Day : ", snacksPerDay, "<br>")
document.write(<p>You will need ${snacksNeeded} ${favoriteSnack} to last you until the ripe old age of ${maximumAge}.</p>);