class Myclass{
    #name;
    price;
    model;
    // use of # in javaScript it is access modifier which is use in class and give the accessibility to method and variables


    constructor(n,p,m){
        this.#name=n;
        this.price=p;
        this.model=m;


    }
    getSet(){
        console.log(this.#name);
    }
    
}
  let clObj=new Myclass("Iphone",100000,"i-10"); // new key word in javaScript :=> it give the new plan object of corresponding class or function ;
  //this keyword is different in javaScript from other languages like java and c++ .i.e it 
  console.log(clObj);
  name="nokia";
  console.log(name);
//   objects by a function
function newObj (a,b,c){
    this.nn=a;
    this.pp=b;
    this.mm=c;

}
let ObjbyF=new newObj("samsung",10000,"s-10");
console.log(ObjbyF);
  

// static functions  : it is a method which is called by class and not called by object
class TestforStat{
    static meth1(){
        console.log("this is a static method");

    }
    method2(){
        console.log("this is a basic method");

    }

}
let newOb=new TestforStat();
newOb.method2();
TestforStat.meth1();