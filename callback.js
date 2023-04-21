

// Higher Order functions are those function which have functions  as arguments
// and that fuction which is used as argument called as callback function

function HigOrderFun(x,fun){    
    console.log("Square is ", x*x);
    fun(3);
}
HigOrderFun(3,fun1)
// call back function in java Script 
function fun1(nn){
    console.log(
      "this is function under function", nn**3
    );
  }

//   setTimeout function in javaScript
console.log("Start");
setTimeout(function(){
    console.log("this is settimeout function");
},3000)
setTimeout(function(){
    console.log("this is settimeout function 2222222");
},0)

console.log("End");
for (let index = 0; index < 100000; index++) {
    
    
}
// Asyncronisation of code means such kind of code which does not execute line by line 
// javaScript is a single thread programming language
