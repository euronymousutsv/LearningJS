//Arrays
var ourArray = ["John",23];

var myArray =["Quincy", 1];

//Nested Arrays
var nestedArray =[['the universe',42],["everything",101101]]
console.log(nestedArray);

//Access Arrays with indexes
var indexArray=[50,60,70];
var myData = indexArray[0];
console.log(myData);

//changing array value using array 
var changeArray = [18,64,99];
changeArray[1]=45; //change arrary equals [18,45,99]

var multiArray=[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
console.log(multiArray);
console.log (multiArray[3][0][1]);
console.log(multiArray[2][1]);

//adding value into array 
ourArray.push(["happy","joy"]);
ourArray.push("utsav",23);
console.log(ourArray);

//removing last element of array
ourArray.pop()
console.log(ourArray);

//removing first array with shift()
ourArray.shift();
console.log(ourArray);

//unshift() is used to add element in the beginning of array
ourArray.unshift("Nista");
console.log(ourArray);
//Shopping List
var myList = [["cereal",3],["milk",2],["bananas",3],["juice",2],["eggs",12]]
