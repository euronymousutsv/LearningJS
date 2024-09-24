// javascript

console.log("Hello from world"); //comment inline comment
 var number = 5; // creating variable
  
 console.log (number);
 
 /*Data Types:
 undefined,null,boolean,string,symbol,number and object
 */
 //Variable 
 var myName = "Utsav" //can be used across any where
 myName = 8
 console.log(myName);
 let ourName = "freeCodeCamp" //will be used within the defined scope
 const pi = 3.14 //constant holds value which does not change in entire operation
 
 //storing value with assignment operator
 var a; //declaring variable
 console.log(a);
 var b =2; //assigning 2 to variable b
 a = 7 ; //assigning 7 to variable a
 b=a; //asssigning value of a to variable b
 
 console.log(a);
 
 //adding numbers
 var sum = 10+10;
 console.log(sum);
 
 //subtraction 
 var subtraction = 12 -10;
 console.log(subtraction);
 
 //multiplication 
 var  multi = 10*2;
 console.log(multi);
 
 //division 
 var quotient = 33/11;
 console.log(quotient);
 
 //increament 
 var myvar = 1
 myvar ++;
 console.log(myvar);
 
 //decrement  
 myvar -- ;
 console.log(myvar);
 
 //remainder
 var remainder = 11%3;
console.log(remainder);

//compund operations += operator
a += 12;
console.log(a);  // -= used for subtraction , *= multiplication, /= division
 
//Declare string variables
//Example 
var firstName ="Utsav"; //whenever double quotation its string
var lastName = "Neupane";


//escape character

var myStr="I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
 
/***** 
 CODE OUTPUT
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 
 *****/ 
 
 //concating string using + operator 
 var firstString= 'this is a start';
 var secondString=" this is a end";
 var finalString= firstString+"\n"+secondString;
 console.log(finalString);
 
 //finding length of a string 
 var firstNameLength=firstName.length;
 console.log(firstNameLength);

//BracketNotation to find character in string 
var firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

//String Immutabilty
// firstName[0] = "L" will not work you cannot change just a letter from the string to change it 
//you should change the whole string

var lastLetterofFirstName = firstName[firstName.length-1];
console.log(lastLetterofFirstName);











 