//console.log("Hello world");

//console.log(a);
//let a=23;
// let a=40;
// if(a>10){
//     let a=300;
//     console.log("a inside:"+a);
// }
// else{
//     console.log("else condition")
// }
// console.log("a outside:"+a);
// let a="20";
// if(a===20){
//     console.log("Equal data")
 
// }
// else{
//     console.log("Not equal data")
// }
// const myname="Rahul";
// console.log("Hiii[..."+myname);
// const data=`Hiii...${myname}`;
// console.log(data);
// function msg(){
//     return "welcome to js";
// }

// const data=msg("Ram");
// console.log(data);
// const data=function msg(name){
//     return name+" welcome to js";
// }
// const msg=data("Sarthak");
// console.log(msg);


//Arrow function

// const data=(myname)=>{
//     //console.log("Welcome to arrow function"+ myname);
//     return  "Welcome to arrow function "+ myname;
// }
// const result=data("Sarthak");
// console.log(result);

// const data=msg=>msg;
// clg data=msg=>msg;
// console.log(data("Greetings.."));

//IIFE
// (function(){
//     console.log("IIFE function");
// })();
// (function()=>{
//     console.log("IIFE function");
// })();

// setTimeout(()=>{
//     console.log("Hiii..");
// },1000);
// setInterval(()=>{
//     console.log("Hiii..");
// },1000);




// function greetings(msg="Welcopme to js"){
//     console.log("Hii"+msg);

// }
// greetings("Sarthak");


function selectlanguage(lang){
    let data;
    if(lang=='java'){
        function javaCompiler(){
            return "Java compiler selected";
        }
        data=javaCompiler();
    }
    else if(lang=='C'){
        function cCompiler(){
            return "C compiler selected";
        }
        data=cCompiler();
    }
    else{
        data="No such compiler is present";
    }
    return data;
}
console.log(selectlanguage('C++'));