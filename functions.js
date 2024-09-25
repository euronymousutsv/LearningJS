function ourReusableFunction(){
    console.log("Hello World!");
    
}
ourReusableFunction();
function reusableFunction(){
    console.log("Hi World!");
}
reusableFunction();
ourReusableFunction();

//passing value into function using arguements
function ourFunctionWithArgs(a,b){ //parenthesis holds the value that has been passed into the function.
    console.log(a-b);
}
ourFunctionWithArgs(10,5)

console.log(ourFunctionWithArgs(52,5))


//global Scope 
var myGlobal = 10;
function fun1(){
var  oopsGlobal = 5; //if var is not defined then it will become global scope.
}

function fun2(){
    var output="";
    if(typeof myGlobal !="undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: "+ oopsGlobal;
    }
    console.log(output);

}

fun1();
fun2();

//local scope 
function myLocalScope(){
    var myVar =5;
    console.log(myVar)

}
myLocalScope();
// console.log(myVar); this will not work as my var is not defined out of local scope function 

//Stand in Line

function nextInLine(arr,item){
arr.push(item);
arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6))
console.log("After: "+JSON.stringify(testArr))//json.stringify is used to convert array to string

//Booleans
function welcomeToBooleans(){
    return true;

}
//conditional Statements
function ourTrueOrFalse(isItTrue){
    if(isItTrue){
        return "yes,it's true";

    }
    return "no,it's false";
}

console.log(ourTrueOrFalse(true));

function testEqual(val){
    if(val==12){ //equality operator performs type conversion value as string and number will be true
        return "Equal";
    }
    return "Not Equal";

}
console.log(testEqual(12));

function testStrict(val){
    if (val===3){
        return "Equal";

    }
    return "Not Equal";

}
console.log(testStrict(3));
/*
3 === 3 will be true 
3 === '3' will be false but on normal equality sign it would be true
*/

function testNotEqual(val){
    if (val != 99){ //inequality operator will do type conversion
        return "not Equal";

    }
    return "Equal"
}
console.log(testNotEqual(100))

function testStrictNotEqual(val){
 if (val !== 99){ //strict inequality sign which does not do any type conversion.
    return "not Equal";
 }   
 return "equal";
}
console.log(testStrictNotEqual(100));
