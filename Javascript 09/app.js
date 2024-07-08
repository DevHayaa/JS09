// 1. Write a function that displays current date & time in your
// browser.

var now = new Date()
document.write(now + "<br>")


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.


function greetUser() {
    var firstName = prompt('Enter your first name:');
    var lastName = prompt('Enter your last name:');

    var fullName = firstName + ' ' + lastName;
    var greetingMessage = 'Hello, ' + fullName + '! Welcome!';
    
    return greetingMessage;
}
var greeting = greetUser();
document.write(greeting + "<br>");


//3: Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


function addNumbers() {

    var num1 = parseFloat(prompt('Enter the first number:'));
    var num2 = parseFloat(prompt('Enter the second number:'));
    var sum = num1 + num2;
    return sum;
}
var result = addNumbers();
document.write('The sum is:', result + "<br>");



// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculator(){
var num1 = +prompt("Enter the num 1");
var operator = prompt("Enter the operater i.e +,-,*,/")
var num2 = +prompt("Enter the num 2");


if(operator === "+"){
 return num1+num2
}else if(operator === "-"){
    return num1-num2
}else if(operator === "*"){
    return num1*num2
}else if(operator === "/"){
    if(num2 === 0){
        return "Error: Division by zero"
    }else{
        return num1/num2
    }
}else{
    return "Invalid Operator"
}

}
alert(calculator())



// 5. Write a function that squares its argument.

function square(number) {
    return number * number;
}

document.write(square(6)); 
document.write(square(5)); 



// 6. Write a function that computes factorial of a number.


function factorial(){
        var num = +prompt("Enter a number:")
    
        if(num < 0){
            alert("Error: Factorial is not defined for negative numbers")
        }else{
            var result = 1;
            for(var i = 2 ; i <= num ; i++){
                result*=i // (result= result * i)  
            }
            alert("The factorial of "+ num +" is " + result)
        }
    }
    factorial()



//     7. Write a function that take start and end number as inputs
// & display counting in your browser.



// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


function calculateHypotenuse(){
       function calculateSquare(x){
        return x * x
       }
       var base = +prompt("Enter the base of a right angle triangle:")
       var perpendicular = +prompt("Enter the perpendicular of a right angle triangle:")
    
       var hypotenuse = Math.sqrt(calculateSquare(base)+ calculateSquare(perpendicular))
    
    alert("The hypoteneus of right angle triangle with base "+ base+ " and perpendicular " +perpendicular+ " is "+ hypotenuse)
    }
    calculateHypotenuse()
    


//     9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

var width = 20;
var height = 10;

function calculateArea(w, h){
    return w * h
}
alert(calculateArea(width, height))


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function isPalindrome(str) {
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]){
            return str+ " is not a palindrome"
        }else{
              return str+ " is a palindrome"
        }
    }
}

console.log(isPalindrome(prompt("Enter a word:")))


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


var sentence = "the quick brown for"
var words = sentence.split(" ")
var titleCase = ""
for(var i =0; i<words.length ; i++){
    titleCase += words[i].charAt(0).toUpperCase()+ words[i].slice(1).toLowerCase()+ " "
}
document.write(titleCase)


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


function titleCase(str){
    var str=prompt("enter any sentence:");
    var words=str.split(" ");
    var titleCase=" ";
    for(i=0;i<words.length;i++){
        titleCase +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+ " ";
    }
    return titleCase;
}
console.log(titleCase());