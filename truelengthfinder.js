// let Myfriends=["ankit","himanshu", "navneet"]
// let Myfamily=["saurav", "gaurav","prince"]
// // lets make a object
// let powers={
//     ankit:"study",
//     himanshu:"topper",
//     getsuperpower : function(){
//         console.log("My favourite power is",this.ankit);
//     }
// }
// Object.prototype.hitesh=function(){
//     console.log("Prince is present in all Object");
// }
// console.log(Myfamily.hitesh());
// console.log(powers.hitesh());
// // if you want only access in array 
// Array.prototype.heyhitesh=function(){
//     console.log("This is hey Hitesh function with Array");
// }
// console.log(Myfamily.heyhitesh());
// // console.log(powers.heyhitesh());
// // inheritence
// let User={
//     user1:"no1",
//     user2:"no2"
// }
// let teacher={
//     teacher1:"teachno1",
//     teacher2:"teachno2",
//     isAvailable:false
// }
// let teacherpower={
//     TeachPower1:"remove",
//     TeachPower2:"remove and resticate also"
//     // way to get all properties of one object to another
//     // ,__proto__: teacher,
//     // __proto__user
// }
// // teacherpower.user1

// // External way to give properties of one object to another
// // like we need to give properties of user to teacher



// // teacher.__proto__=User




// // modern way to give the properties of one object to another object 
// Object.setPrototypeOf(teacherpower,User)
// let ffff=teacherpower.user1
//    console.log(ffff); 
   




   Object.prototype.truelength= function(){
    console.log(`The true length of the given string  is ${this.trim().length}` );
   }
   "hiteshhh...       ".truelength()

   "hii..         ".truelength()
  