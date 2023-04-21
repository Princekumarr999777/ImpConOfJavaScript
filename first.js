// // there is only two variable in javaScript  i.e let and const .
// // You should use const at most
// let a = 2;
// a = 5;
// console.log(a)
// bl = 4;
// bl = 8;
// console.log(bl)
// // default value of identifier in javascript is let
// const check = 4;

// console.log(check)
// arr = ["aa   ", 34, 4, 6, "you"]
// console.log(arr[0])
// // operators in javaScript
// // arithmetic operators
// // logical operator
// // i.e is and   or
// bb = false;
// aa = true;
// cc = bb && aa
// dd = bb || aa;
// console.log(cc)
// console.log(dd)
// // condition statement in javascript
// // i.e if else condition
// if (bl >= 17) {
//     console.log("You are ready to drive the super bike")
// }
// else {
//     console.log("You are not able to drive the bike")
// }
// // nested if else condition in js
// if (bl >= 18) {
//     console.log("you are able to vote")

// }
// else if (bl >= 25) {
//     console.log("Now you can become the member of parliament")

// }
// else if (bl >= 35) {
//     console.log("Now you are able to become president to India")
// }
// else {
//     console.log(
//         "Now you can do anything in your life ! best of Luck for Your bright future"
//     )
// }
// // switch keyword in js//
// let option = "3"
// switch (option) {
//     case "A": console.log("I am option A");
//         break;
//     case "B": console.log("I am option B");
//         break;
//     default: console.log("Invalid input bro!");
// }
// //  loops in javaScript
// // for , do while and while
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(
//     "this is the while loop in javaScript"
// )
// let b = 0;
// while (b < 10) {
//     console.log(b);
//     b++;

// }
// // do while loop
// console.log("Hello Guys it is the do while loop ");
// let d = 0
// do {
//     console.log("I am the Do While Loop ", d);
//     d++
// } while (d < 20)
// // ternary operator in javaScript
// // ? :
// condition = true; // in javaSCript , we can use variable without key that is why it is called loosely typed language
// condition ? console.log("Yes it is true") : console.log("No!  it is not true");
// let ll = new Array(4);
// ll = [3, 5, 6, 7, 55, 45, 5, 54,]
// ll2 = ll.length - 2
// console.log(ll2)
// ll[3] = 1000
// console.log(ll)
// ll.push(444, 66666666)
// console.log(ll)
// ll.pop(444);
// console.log(ll);
// // for manuplate with first index

// ll.shift()
// console.log(ll);
// ll.unshift(3333)
// console.log(ll);
// // concatinate of two arrays
// let a1 = [3, 4, 5]
// let a2 = [4, 5, 6, 7, 8]
// let a3 = a1.concat(a2);
// console.log(a3);
// // when we want to join to array and make a single string
// s1 = a3.join(a1)
// console.log(s1);
// // function for reverse the array
// s2 = a3.reverse()
// console.log(s2);
// // index of Array
// console.log(a2.indexOf(5));
// // slice function in javaScript
// console.log(a2.slice(1, 5));

// // splice function  => first take index no, delete elements and last is adding element
// a2.splice(2, 2, 100, 200);
// console.log(a2);
// // function in javaScript
// // funtctions without parameters and return keywords
// function funName() {
//     console.log("Hello ! I am funName");
// }

// funName();
// // function with return keyword
// function fun2(){
//     return 5;
// }
// const  ffff=fun2();
// console.log(ffff);
// // function with one or more parameters
// console.log("fun 3");

// function fun3(idd){
//     return idd++;
// }
// funVar=fun3(4);
// console.log(funVar);

// result=[3,5,3]
// result1=[4,5,5]
// function fun4(result,result1){
//     result3=[];
//     for(a=0; a<result.length;a++){
//         result3[a]=result[a]+result1[a]
//     }
//     return result3;
// }
// funvar=fun4(result,result1);

// console.log(funvar);
// uNLIMITED FUNCTION ARGUMENTS IN javaScript
// function fffff(){
// let id1=arguments[0];
// for(iii=0; iii<arguments.length;iii++){
//    id1 =-arguments[iii];
// }
// return id1;
// }
// let valueoffun=fffff(555,12,12)
// console.log(valueoffun);
// Arrow functions in javaScript
// const  fun =(full)=>{
//      full=4444;
//      console.log("Hiiii... This is my Arrow Function");
//      console.log(full);
//      full=100;
//      return full;

// }
// fun()
// let value=fun();
// console.log(value);
// arrow function without return keyword

// let funnn=(square="1")=>square*square;
// let valueoffun=funnn(3);
// console.log(valueoffun);
// returning a object in javaScript
objectret = (square, addition) => ({
  square: square * square,
  addition: addition + addition,
}); // object have key and value such type of variable is called object .

let valueofobj = objectret(4, 5);
console.log(valueofobj);
// anonymous function in javaScript
// means function without name such kind of function is called anonymous function
// let fu=function (){
//    console.log("function without name");
// }
// fu();
// // immidiate function
// (function fff(square) {
//    console.log("this is immidiate function", square*square);

// })(4);
// objects in javaScript
let obj1 = { no1: 1, no2: 2, no3: 3, no4: 4, no5: 5, no6: 6 };
console.log(obj1);
// object declartion
let emp = new Object();
emp.id = 1;
emp.customerName = "Saurabh";
emp.salary = 100000000;
console.log(emp);
// object with function in javaScript
function objjj(i, n, s) {
  this.i = i;
  this.n = n;
  this.s = s;
}
let value = new objjj(1, "helllo", 20000);
console.log(value);
// some ways to get the value of object
console.log(value.n);
console.log(value["n"]);
// some methods of objects
let keys = Object.keys(emp);
console.log(keys);
let values = Object.values(emp);
console.log(values);
let entries = Object.entries(emp);
console.log(entries);
// method to freeze the value of attribute
emp.id = 4444;
// freeze me addition of entries and updation is not allowed
// Object.freeze(emp);
// emp.id=1111;
// for only update you can use seal
Object.seal(emp);
emp.address = "random";
emp.id = 33;
console.log(emp);
// to get object data from another object
let objAssign = Object.assign({ iddd: 45 }, emp);
console.log(objAssign);
