// if else condition in real world projects 
let islogin=false;
if(islogin){
    console.log("Yes , You are login in your Account");
}
else{
    console.log(
        "Sorry , you have to login "
    );
}
let googleAuthToken=false;
let OtpAuthToken=false;
let UserToken=false;
if(googleAuthToken||OtpAuthToken||UserToken){
    console.log("congrats, you login in your Account");
}
let day=4;
switch(day){
    case 1 : {
        console.log("Monday");
    }
    break;
    case 2 : {
        console.log("Tuesday");
    }break;
    case 3 : {
        console.log("Wednesday");
    }break;
    case 4 : {
        console.log("Thursday");
    }break;
    case 5 : {
        console.log("Friday");
    }break;
    case 6 : {
        console.log("Saturday");
    }break;
   default:{
    console.log("Holiday");
   }
}


// loops in javaScript
for(let i=0; i<5;i++){
    console.log(`loop value is :${i}`);
}
// another format of for loop 
let arr=['aaaa1','aaaa2','aaaa3']
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(`loop with array : ${element}`);
}
// for in loop in objec 
let obj={key:"no1",key2:3,key3:4,key5:5}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`for in loop ${element}`);

    }
}
for (const iterator in obj) {
   
    console.log(`for out : ${iterator} - ${obj[iterator]}`);
}
 for (const ite of arr){
    console.log(ite);
 }





 let star =1;
 if(star=2){
    console.log("You got 2 stars");   
    
 }
 else if (star=3){
    console.log("you got 3 stars ");
 }
 else if (star=4){
    console.log("you got 4 star");
 }
 else {
    console.log("you don't get any stars ! sorry");
 }