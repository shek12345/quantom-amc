
/*var age = 12;
if (age >= 18) {
    console.log(valid);
}
else {
    console.log(invalid);}*/

/*for (var i = 0; i < 10; i++) {
    console.log(i)
}
while (a <= 20) {
    if (a % 2 == 0) {
        console.log(a)
    }
    a++;
}*/
//function in javascript
// 1. function without paramter and retuen type
function addition() {
    var a = 10; b = 40;
    var c = a + b;
    console.log("addition is" + c);
}
addition();
//2. function with paramter and  no retuen type
function substraction(a,b) {
    
    var c = a - b;
    console.log("substraction" + c);
}
substraction(23, 12);
//3. function with paramter and return type
function multiply(a, b) {
    var c = a * b;
    return c;
}
var result = multiply(10, 20);
console.log("multi" + result)
//array in javascript
var nums = [10, 20, 30, 40, 50, 60];
var names = [ss, ak, sd, er, cs];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);

}



var nums = [56, 34, 12, 89, 59];

var names = ["rohan", "suraj", "kishor", "rahul"];

//for (var i = 0; i < names.length; i++) {

//    console.log(names[i]);

//}


names.push("amol");

names.unshift("dhiraj");

//remove the last element

names.pop();

//remove the first element

names.shift();

// splice

names.splice(1, 0, "balaji", "kushal");

// slice

//var list = names.slice(2);

var list = names.slice(1, 5);    // --> <5

names.sort();

names.reverse();

document.getElementById("d1").innerHTML = names;

document.getElementById("d2").innerHTML = list;





    

