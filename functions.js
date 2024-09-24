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
