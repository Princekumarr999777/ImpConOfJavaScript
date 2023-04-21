function CreatePromise(){

return new Promise (function exe(resolve,reject){

// here ,we can write Asynchronic piece of code like settimeout
setTimeout(function f() {
    console.log("TimeOut");
    
}, 3000);

})

}
console.log("Start");
let x=CreatePromise();
console.log("we got a new Promise");
x.then(function f(){
    console.log("Promise done");
})