
//                                       {Lecture 01}
//                                  Rules for naming variable
// 
// example
// 1value 
// value1
// your can use underscore_ or dollar smybol
// first_name(valid)
// _firstname(valid)
// you cannot use spaces
// first name (invalid)
// convention
// start with small letter and use camelcase
// var value_1=10;    // snake case writing
// console.log(value1**3);
//we can store some information in variable
// later use this inforamtion 
// use strict use when pass wrong something its alert 
// var is keyword to declare variable
// we can change that inforamtion


//                                       {lecture#02}
//                                       "use strict"

// var firstName="ihsan"
// console.log(firstName);
// firstName="ihsan hashmi"
// console.log(firstName)


//                                          {Lecture 03}
//                                     let & const keyword 
// declare variable with let 

// let firstname="ihsan hashmi"
//  firstname="react native developer"
// console.log(firstname)

// // const keyword

// const lastname="front end developer"
// // lastname="cross platform developer"
// console.log(lastname)


//                                           {Lecture 04}
//                                          string indexing 
// i h s a n
// 0 1 2 3 4
// string length
// we can index character of any string 

// const firstname="ihsan"
// console.log(firstname.length);
// we can print last character using length-1
// console.log(firstname[2]);
// it must incldue spaces during couting  
// console.log(firstname[firstname.length-1]);


//                                           {Lecture 05}
//                                           string methods
// ()trim
// ()uppercase
// ()lowercase
// slice
// we can create new or exact same  varible  to count length

// let firstname="ihsanHashmi ";

// let lastname=firstname.trim();
// console.log(lastname);
// console.log(lastname.length);

// firstname=firstname.trim();
// console.log(firstname.length);

// firstname=firstname.toUpperCase();
// console.log(firstname)

// firstname =firstname.toLowerCase();
// console.log(firstname);


// start 0index
// end where you can choose in characters

// if we select 1indexing just then it will print all characters
// let lastname=firstname.slice(0,3);
// console.log(lastname);


//                                       {lecture#06}
//                                      typeof operator 

// data types (primitive data types)
// string "ihsan"
// number 1,2,3,4
// boolean true false
// BigInt
// undefined
// null
// convert string to number 
// convert number to string 

// string to number
// let firstname= +"ihsan"
// console.log(typeof firstname)
// firstname=firstname +"";
// console.log(typeof firstname)



// number to string
// let firstname =23;
// firstname=firstname + "";
// console.log(typeof(firstname));


//                                        {lecture#07}
//                                      string concatinations 
// string template

// let s1="ihsan"
// let s2=21

// let s3= s1 + "" + " "+ s2

// console.log(s3)

// let firstname="ihsan"
// let lastname="hashmi"
// let age=21

// let final=`myself ${firstname} ${lastname} and  my age is ${age} `
// console.log(final);


//                                         {lecture#08}
//                                      Data Types (primitve)


// undefined
// null
// BigInt

// but we do not use this in const it will show error 

// let firstname;
// console.log(typeof firstname)
// let firstname=null;
// firstname="ihsan"
// console.log(firstname , typeof firstname)

// we can use BigInt with BigInt to perform operation


// var number=BigInt(12)
// console.log(number)

// var num=BigInt(10)
// var mynum=10n

// console.log(num+mynum)


//                                       {lecture#09}
//                                      Operators conditional

// boolean and comparison
//   == vs ===
// > < >= <=  true , false
// let num1=12;
// let num2=10;
// console.log(num1>num2)

// let num1=10;
// let num2=1;

// it check just value not be data type  ==
// console.log(num1==num2)
// it will check both === data type and value


// console.log(num1 ===num2)

//  != vs !==
// console.log(num1!= num2)

// console.log(num1 !== num2)


//                                       {lecture#10}
//                          if else conditons using comparison operator

// let age=12;
// if(age>15){
//     console.log("user can play games")
// }else
// {
//     console.log("user cannot play games")
// }


// let num=11;
// if(num%2===0){
//     console.log("this is even number")  
// }else{
//     console.log("this is odd number")
// }

// truthy and falsy value 
//   we can put false, 0,undefine,"",null
// if we put any values expecet of these 


//  falsy values 


// var firstname="";
// if(firstname){
//     console.log(firstname)
// }else{
//     console.log("this is false values ")
// }

//                                          {lecture#11}
//                                          Operators con..




// we can set variable using condition if else

// ternary operator or conditional operators

// let age=4;
// let drink=  age>=8 ? "coffee":"milk"

// console.log(drink)

// let age=16;
// let drink;

// if(age>=15){
    
//     drink="coffee"
// }else
// {
//     drink="milk"
// }
// console.log(drink)


//                                       {lecture#12}
//                                  and or operators where we can use


// if both conditions are ture then it will run otherwise return false
// let firstname="ihsan"
// let age =21;

// if(firstname[0]==="i" && age>=18){
//     console.log("this is true condition")
// }else{
//     console.log("this is fale condtion")
// }

// in this statement "I" is capital therfore it does not true condition

// if(firstname[0]==="I" && age>=17){
//     console.log("this is right condition")
// }else{
//     console.log("this is not true condition")
// }

// in or condition one is ture it will run the progarm

// let firstname="ihsan"
// let age =21;

// if(firstname[0]==="I" || age>=18){
//     console.log("it will work this progaram")
// }else{
//     console.log("this is false statement ")
// }

// if both condition are fals then it does not work

// let firstname="ihsan"
// let age =21;

// if(firstname[0]==="I" || age>=23){
//     console.log("it will work this progaram")
// }else{
//     console.log("this is false statement ")
// }



//                                          {lecture#13}
//                                          String Methods

// nested numbers 
// let mynumber=50;
// let enter= +prompt("Enter guess number")

// if(enter===mynumber){

//    console.log("you guess right number")
// }else{
//    if(enter<mynumber){
//        console.log("your Guess number is low ")
//    }else{
//        console.log("your guess number is too high")
//    }
// }


//                                           {lecture#14}
//                                          Nested-if-else


// let temPerature=15;
// if(temPerature<0){
//     console.log("extremly cold weaths")
// }else if(temPerature<16){
//     console.log("weather is cool")
// }else if(temPerature<26){
//     console.log("weather is awsome")
// }else if(temPerature<45){
//     console.log("going to swim")
// }else{
//     console.log("to hott")
// }


//                                           {lecture#15}
//                                         Switch case statememts



// we just track value informaiton using switch case statement 
// let day=2;
// switch(day){
//     case 0:
//         console.log("sunday")
//         break;
//         case 1:
//             console.log("monday")
//             break;
//             case 2:
//                 console.log("tuesday")
//                 break;
//                 case 3:
//                     console.log("wednesday")
//                     break;
//                     case 4:
//                         console.log("thursday")
//                         break;
//                         case 5:
//                             console.log("fridady")
//                             break;
//                             case 6:
//                                 console.log("friday")
//                                 break;
//                                 default:
//                                     console.log("invalid show")
// }


//                                                {lecture#16}
//                                              while-loop


// while loop using example
// for loop 
// let num=0;
// while(num<=9){
//     console.log(num)
//     num++;
// }

// if we declare variable wih var then it will be exist outside the block 

// for 
// (let i=0; i<=20; i++){
//     console.log(i)
// }

// let total=0;
// let num=10;
// for(let i=1; i<=num;i++){
//     total=total+i;
//     console.log(total)
// }

// let i=0;
// do{
//   (i++)
//   console.log(i)
// }while(i<=9)


//                                          {lecture#17}
//                           primitvie vs reference varivable 


// in primitive which value we assign next var that will not change but
// refernce case it will change
// let fname="ihsan"
// lname=fname;
// console.log(fname)
// console.log(lname)

// fname="hashmi";

// console.log(fname)
// console.log(lname)

// in this case value does not change 

//  let fname=["ihsan"]
//  let lname=fname;
//  console.log(fname)
//  console.log(lname)


//    fname.push("hashmi")
//    lname=fname;
//    console.log(fname)
//    console.log(lname)


//    in this case value is change


//                                           {lecture#18}
//                                  primitvie vs reference varivable 

// in primitive which value we assign next var that will not change but
// refernce case it will change
// let fname="ihsan"
// lname=fname;
// console.log(fname)
// console.log(lname)

// fname="hashmi";

// console.log(fname)
// console.log(lname)

// in this case value does not change 

//  let fname=["ihsan"]
//  let lname=fname;
//  console.log(fname)
//  console.log(lname)


//    fname.push("hashmi")
//    lname=fname;
//    console.log(fname)
//    console.log(lname)
//    in this case value is change



//                                          {lecture#19}
//                                          Array Methods

// how to create clone array 
// how to concatenate tw0 arrays
// using spread operator ... 
// let array1=["ihsan","hashmi"]
// let array2=[...array1,"react native developer"]
// console.log(array1)
// console.log(array2)

// now  can i check both arrays are equals
// console.log(array1===array2)


//                                               {lecture#20}
//                                       how to use loop in array 



// let fruits=["apple","banna","grapes"]
// let fruits2=[]
// for(i=0; i<=fruits.length-1; i++){
  
//     // console.log(fruits[i].toUpperCase())
//     fruits2.push(fruits[i].toUpperCase())
// }
// console.log(fruits2)


//                                                 {lecture#21}
//                                                array destructring 
// second var ko 0 index value mil gye 
// third var ko 1 index value mil gye 

// let first=["ihsan","hashmi"]
// let[second,third]=first;

// second=["ashraf"]

// console.log(first)
// console.log(second)
// console.log(third)


//                                                   {lecture#22}
//                                      Different b/w dot and barakets


// const hash="email"
// const person={
//     name :"ihsan",
//     reg:"hashmi"

// }
// // console.log(person["name"])

// person[hash]="wordhash0@gmail.com"
// console.log(person)


//                                                   {lecture#23}
//                                  using for loop to iterate with Object

// const person={
//     name:"ihsan",
//     lname:"hshmi",
//      age :21
// }

// for(key in person){
//     console.log(person[key])
// }


//                                                   {lecture#24}
//                                               OBJECTS DESTRUCTING 

// const band={
//     name:"atif aslam",
//     song:"tere bin ma "
// }
//   const{name,song}=band;

//   console.log(name);
//   console.log(song);


//                                                   {lecture#25}
//                                                  objects in array 

// very useful in real world app 
// this is very important topic lets practice 


// const users=[
//     {    usersid:1,
//          name:"ihsan",
//          age:25},

//          {    usersid:2,
//             name:"ikram",
//             age:21},

//             {    usersid:3,
//                 name:"arham",
//                 age:29},
// ]

// // console.log(users)

// for(user of users){
//     console.log(user.name)
// }

//                                                   {lecture #26}
//                                                How to Create Objects


// function add(id, name){
//     this.id=id,
//     this.name=name;}



// c=new add(2, "ikram")


// console.log(c.id,c.name)



// const person={
//     name:"ihsan",
//     id:5497
// }

// const one=person.name