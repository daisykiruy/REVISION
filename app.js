//normal(12, 12);

// in opening a new file
// we need to create a new folder ,then go to vs code,go to files,go to open new folder,then select the folder you created
//to view printed js work we need to open the html browser,right click,go to inspect then to console
//we started with the commonly used constant variables used in js
//u must also link css and js to the html before going live

////keywords let,var and const

//var keyword is function sculped meaning that it is accesible in the function in
//which it is defined
//let keyword is block sculped meaning that it is accesible in the block in which
//it is defined
//const keyword is block sculped and cannot be assigned another variable
//if u want to view results in the console we use console.log()
//we use console.clear() if u want to clear the console

////lesson 1: arrays

//arrays are used to store data in a machine
//an array is a special variable which stores more than one value
// -example-
//const cars =["toyota","mitsubushi","landrover"]
//          console.log(car[0])
//arrays are numbered from 0 onwards:example
// const school =["marymount","chavakali","utumishi"]
// console.log(school[1])

////lesson 2: objects

//objects are also used to tore data
// we have the object,the property and the property name;example
// let car={
//     company:"toyota",
//     rimColour:"red",
//     carColour:"black",
//     numberPlate:125467,
// }
// console.log(car.company)
// let car={
//    colour:"black",
//    company:"toyota",
//    origin:"china",
//    numberplate:34562,
//    rimcolour:"red",
//    area:function(){
//       return 3.14*radius
//       console.log('here we are')
//    }

// }
// let person={
//    name:'denis'
// }
// console.log(person.name)

/////lesson 3:functions

//a function has a function name,parenthesis()and parameters which are the values inside the parenthesis
//example;
// function Fullnames(Fname,Sname){
//     return Fname+"  "+Sname
//     Fname() when invoking a parameter u invoke them inside the function
// }
// console.log('daisy',"kirui")
// fullname()  //this is invoking

////template strings

// const name=function(time,fullname){
//    console.log(`good${time}  ${fullname}`)
// }
// name("morning","jayden kirui")
// obj name =country
// properties=pop,gender(male,female,they),country name,continent,method(functional expression-i love my country)
// function name(city,country){
//    console.log(`i live in ${city} ${country}`)
// }
// name("nairobi","kenya");

// high order fuctions
// Arrow functions

// let country={
//    population:6789053,
//    gender:["male","female","them"],
//    countryName:"kenya",
//    continent:"africa",
//    greeting: function(country,number){
//       console.log(`my country${country},has a total number of female${number}`)

//    }

// }
// country.greeting('kenya',1212212121)
// console.log(country.gender[2])
// let name =(fname,lname,mname)=>{
//    console.log(`my name is ${fname} ${lname} ${mname}`)

// }
// name('torongei',"daisy","kirui");
//

////lessson 4: methods

// then i learnt about method;a method is a function inside an object
// let person={
//     firstname:"john",
//     secondname:"kirui",
//     thirdname:"torongei",
//     fullname:function(a,b){
// return(a*b)
//     }
// }
// console.log(person.fullname(20,30))

////lesson 5:arrow functions

//then i learnt about arrow functions
//they work the same as functions but the name function is not being used
//we use =>..example
// const PI = 3.14;
// let area = (radius) => {
//   return PI ** radius;
// };
// console.log(area(PI, 14));

// const PI = 3.14;
// function area(radius) {
//   return PI ** radius;
// }
// console.log(area(41));
////lesson 7:higher order functions
////lesson 8:ES6 modules
////lesson 9:synchronous and asynchronous javascript
////lesson 10:object oriented programming (OOP)

////lesson 6 :document object model (DOM)

// DOM is a tree of elements,javascript can be used to manipulate DOM
// DOM is basically a structured representation of your html
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);

// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[96]);
//console.log(document.forms)//this is how to get all the forms in your page
//console.log(document.links)//how to view all the links in your page
//console.log(document.images)//how to view all the images on your page

//SELECTORS
//GET ELEMENT BY ID
// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
//textcontent is used to change
// what has been written in the text though it does
//not pay attention to style
// headerTitle.innerText = "come-on"; //the difference btwn innnerText and textcontent
// is that innerText pays attention to the style while textcontent does not
// headerTitle.innerHTML = " <h5>helo</h5>";
// headerTitle.style.color = "blue";

//GET ELEMENTS BY CLASS NAME
// var item = documarent.getElementsByClassName("list-group-item");
// console.log(item);
// console.log(item[1]);
// item[1].textContent = "helo2";
// item[1].style.fontWeight = "bold";
// item[1].style.backgroundColor = "green";
// item.style.backgroundColor = "yellow"; //this brings an error because when u want to
//set certain properties to a number of items ,it works as an array and
// therefore we use a for loop
// for (var i = 0; i < item.length; i++) {
//   item[i].style.backgroundColor = "yellow";
// }

//GET ELEMENT BY TAG NAME
// var li = document.getElementsByClassName("list-group-item");
// console.log(item);
// console.log(item[1]);
// li[1].textContent = "helo2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "green";
// li.style.backgroundColor = "yellow"; //this brings an error because when u want to
//set certain properties to a number of items ,it works as an array and
// therefore we use a for loop
// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "yellow";
// }
//getElementsByClassName and getElementByTagName work thw same way

//QUERYSELECTOR
//it can use id,classname,tagname..either of them
//ID(#), class(.)
//used for only one item
// var header = document.querySelector("#header-title");
// header.style.borderBottom = "solid 4px";

// var input = document.querySelector("input");
// input.value = "write on me";

// var submit = document.querySelector('input [type ="submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "yellow";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var Item2 = document.querySelector(".list-group-item:nth-child(2");
// Item2.style.color = "green";

//QUERYSELECTORALL
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "how ru";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundcolor = "blue";
// }

//TRAVERSING THE DOM
// var itemlist = document.querySelector("#items");

//PARENT NODE
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "grey";
// console.log(itemlist.parentNode.parentNode);

//PARENT ELEMENT  it is the same as the parentNode
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = "grey";
// console.log(itemlist.parentElement.parentElement);

//CHILD NODES   it shows line breaks
// var itemlist = document.querySelector("#items");
// console.log(itemlist.childNodes);

//CHILDREN it is more advisable to use,it doesnt show line breaks
// var itemlist = document.querySelector("#items");
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = "yellow";

//FIRST CHILD
// var itemlist = document.querySelector("#items");
// console.log(itemlist.firstChild);

//FIRSTELEMENTCHILD it assumes the line break and takes the actual element
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.style.backgroundColor = "red";
// itemlist.firstElementChild.textContent = "hello people";

//LASTELEMENTCHILD it assumes the line break and takes the actual element
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.style.backgroundColor = "red";
// itemlist.lastElementChild.textContent = "hello people";

//NEXTSIBLING
// var itemlist = document.querySelector("#items");
// console.log(itemlist.nextSibling);

//NEXTELEMENTSIBLING
// console.log(itemlist.nextElementSibling);
// itemlist.nextElementSibling.style.color = "green";

//PREVIOUS SIBLING
// var itemlist = document.querySelector("#items");
// console.log(itemlist.previousSibling);
// itemlist.previousSibling.style.color = "green";

//PREVIOUS ELEMENT SIBLING
// var itemlist = document.querySelector("#items");
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = "green";

//CREATE ELEMENT

//create a div
// var newDiv = document.createElement("div");
//add classname
// newDiv.className = "hello";
//add ID
// newDiv.id = "hello1";
//add attribute
// newDiv.setAttribute("title", "hello div");
//create text node
// var newDivText = document.createTextNode("hello world");
//add text to div
// newDiv.appendChild(newDivText);
// var container = document.querySelector("header.container");
// var h1 = document.querySelector("headder h1");
// console.log(newDiv);
// container.insertBefore();

//EVENT LISTENERS

// var button = document
//   .getElementById("button")
//   .addEventListener("click", function butttonClick() {});
// function buttonClick() {
//   console.log("buttton clicked");
// }
////adding event listeners

// var button = document
//   .getElementById("button")
//   .addEventListener("click", function () {
//     console.log("my name is daisy");
//   });

////or

// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonclick)

// function buttonclick() {
//   console.log("buttton clicked");
// }

////we have differnt events like
//click
//dbl click
//mouse down
//mouse up
//mouse enter
//mouse leave
//mouse over
//mouse out
// mouse move
// mouseX
// mouseY
//keydown..this is when you presss down a key
//keyup
//keypress
//focus..when you click inside the box
// blur...when you click outside the box
//cut
//paste
//input
//change

// var button = document
//   .getElementById("button")
//   .addEventListener("mouseenter", runEvent);

// function runEvent(e) {
//   console.log("EVENT TYPE :" + e.type);
// }

//

//higher order functions
//for each (this is used as an increment)
//filter(this is used to get a certain category)
//sort
//remove
//reduce
//map

//es6 modules
//modules enable you to import and export different sections of code
//from different files into other fileswhich anables you to break
//your code into smaller parts thet makes it easier to understand

// export default class user {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// export function printname(user) {
//   console.log(`users name is ${user.name}`);
// }
// export function printage(user) {
//   console.log(`user's name is ${user.age} years old`);
// }
