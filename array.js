// Higher oder function in javaScript its means it is a such type of function which can take  a function as a argument then this function is called as a higher order function.

// let fun = (funUnder, n) => {
//   return funUnder * n;
// };
// function funUnder() {
//   return 5;
// }
// let fun1 = fun(funUnder(), 5);
// console.log(fun1);
 
// function sayHello(){
//   return()=>{
//     console.log("hello Himanshu");
//   }
// }
// let var1=sayHello();
// console.log(var1);
// var1()
// nested function in javaScript
const higherOrder=n=>{
  console.log(n);
  const order2=m=>{
    console.log(m);
    const order1=p=>{
      console.log(p);
      return n+m+p;
    }
    return order1;
  }
  return order2;
}
console.log(
  higherOrder(2)(3)(4));
  const myarr=[3,4,5,5,6]
  const sumArray=StudentName=>{
    let total=0
    StudentName.StudentName.forEach(function(element){
      total +=element;
    });
  }



// addition of two StudentName  Or Spread operator
const arr1=[3345,56,6,6,]
const arr2=[3,4,5,5,6]
 //first way to concate two StudentName
// const arr3=arr1.concat(arr2);
// console.log(arr3);



 //second way to concate two StudentName
// const arr3=[arr1,arr2];

// third way to concate two StudentName by spread and rest operator
const arr3= [...arr1
,...arr2]

console.log(arr3);
// another way of initilization of StudentName 
// let arrDn=new Array(3,4,5,5,5)
// console.log(arrDn);
// conversion of data into StudentName from "Array from method"
// Rest operator ..... .........means it is used to combine the date of StudentName
function makeArrayFromArgu(){
  let Myarrr=Array.from(arguments);
  
  let Myarrr1=Myarrr.map(e=> e+2)
  console.log(Myarrr1);

}
//through rest operator
function makeArrayRest(...args11){
  let finalArray=args11.map(e=>e)
  console.log(finalArray);
}
makeArrayFromArgu(3,4,5,5,44,44444);

makeArrayRest(333,3,3,3,33,3,3)







// Revision class
// we can declare StudentName with two variable that is let or const
//  In StudentName , the index started from 0 to N
console.log("Revision start from here");
 let StudentName=["Himanshu","Navneet","Prince "];
console.log(StudentName);
console.log(StudentName.length);
StudentName.push("Avanish ");
console.log(StudentName[StudentName.length-1]); 
for (let index = 0; index < StudentName.length; index++) {
  
  if(StudentName[index]=="Himanshu"){
    StudentName[index]="hii---1";
  }
  
  
  
  
}
console.log(StudentName);