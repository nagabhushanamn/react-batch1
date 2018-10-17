"use strict"

/*

 in 2015, ECMAScript community ,  ECMAScript-2015  or ES6

 New syntax
 -----------

 1. sring interpolation
 2. let & const keywords with block-scope
 3. function with default & rest params
 4. New way of OO with class-syntax
 5. Obj-litral enhancements
 6. de-structuring
 7. spread operator
 8. symbol data-type
 9. itertors
 10. for-of-loop
 11. arrow-function


*/


//----------------------------------------------------------------------
// arrow-function
//----------------------------------------------------------------------


// way-1: normal-function-expression

// let getPrice = function () {
//     return 100 + 200
// }

// way-2: arrow-function-expression

// let getPrice = () => {
//     return 100 + 200
// }


// let getPrice = (count) => {
//     return count * (100 + 200)
// }

// or

// let getPrice = count => {
//     return count * (100 + 200)
// }


// let getPrice = (count,tax) => {
//     return count * (100 + 200)+tax
// }

// or

// let getPrice = (count, tax) => count * (100 + 200) + tax


// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200)
//     let total = cost + tax
//     return total
// }




/*

    Higher-order function

    ==>  a function which takes function as parameters or which return function

    // when / where to use arrow-function ?

    -> for compact function-arg
    -> to capture 'this'

*/



// use-1: for compact function-arg

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort();
// nums.sort(function(a,b){return a-b});
// or
// nums.sort((a,b)=>{return a-b});
// or
// nums.sort((x, y) => x - y);  // sort ==> compare & swap


// -> use-2 : to capture 'this'

/*

 by default, 

    ==> we can bind all regular-function  to any object statically/dynamically
    ==> arrow-function always bound to creator

*/


// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         // let askQues = function (q) {
//         //     console.log(this.name + " answering " + q);
//         // }

//         // or

//         let askQues = (q) => {
//             console.log(this.name + " answering " + q);
//         }

//         console.log('teaching ends..');
//         return askQues;
//     }
// }
// let askQues = tnr.doTeach();
// // askQues("Q1") // error
// // askQues.call(tnr, 'Q1');
// askQues("Q1")

// let enemyTnr = {
//     name: 'My Enemy'
// }
// // askQues.call(enemyTnr, 'Q2')
// askQues("Q2")




// Quiz

// Note :  global-scope always executed by global-object/window

// let regularFunc = function () {
//     console.log(this);
// }
// let arrowFunction = () => {
//     console.log(this);
// }
// regularFunc();
// arrowFunction();

// let o1 = {
//     name: 'O1',
//     reg: regularFunc,
//     arr: arrowFunction
// }
// o1.reg();
// o1.arr();


// Q


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + " procesed..");
//     }
// };


// let invoice = {
//     num: 123,
//     process: () => {
//         console.log('INV-' + this.num + " procesed..");
//     }
// };

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + " procesed partially");
//         return function () {
//             console.log('INV-' + this.num + " procesed completly");
//         }
//     }
// };


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + " procesed partially");
//         return () => {
//             console.log('INV-' + this.num + " procesed completly");
//         }
//     }
// };


// let complete = invoice.process();
// complete();


//----------------------------------------------------------------------
// symbols & iterators & for-of-loop
//----------------------------------------------------------------------

/*

    symbol: unique & immutable , used as object's identifier property

*/

// Ex.1

// let javaSymbol = Symbol.for('java');
// let rubySymbol = Symbol.for('ruby');


// let e1 = { name: 'Joshua', [rubySymbol]: 'Ruby,Rails' }
// let e2 = { name: 'Nag', [javaSymbol]: 'all in java' }

// if(e1[rubySymbol]){
//     console.log('he is ruby employee');
// }


// Ex.2


// let breakFastMenu = ['Idly', 'vada', 'poori', 'samosa'];


// // if object is an iterable-object, it must have Symbol.iterator property


// // if object is an iterable-object, 

// let [m1, m2, m3] = breakFastMenu; // de-structuring
// let newMenu = [...breakFastMenu, "biryani"]; // spread
// for (let menu of newMenu) {  // for-of0loop
//     console.log(menu)
// }



// let idGenerator = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 id++
//                 return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
//             }
//         };
//     }
// };

// for (let id of idGenerator) {
//     console.log(id);
// }
// let ids = [...idGenerator]
// let [id1, id2, id3] = idGenerator;



//----------------------------------------------------------------------
// spread operator
//----------------------------------------------------------------------


// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums = [1, 2, 3];
// // func(nums);
// // func(nums[0], nums[1], nums[2]);
// // or
// func(...nums)


// // e.g


// let arr1 = [1, 2, 3];
// let arr2 = [7, 8, 9];
// let arr3 = [...arr1, 4, 5, 6, ...arr2];


//----------------------------------------------------------------------
// de-structuring
//----------------------------------------------------------------------


// 1. object destructuring

// let person = { name: 'Nag', age: 35 }

// manual
// let myName = person.name;
// let myAge = person.age;

// // automtic
// let { name: myName, age: myAge } = person;

// let { name: name, age: age } = person;
// // or
// let { name, age, address = "Nil" } = person;


// 2. array destructuring

// let nums = [10, 20, 30, 40, 50, 60, [70, 80]]

// manual

// let n1 = nums[0];
// let n2 = nums[1];
// let n3 = nums[2];

// or

// let [n1, n2, n3] = nums
// let [n1, n2, n3, n4 = 400, , n6, [n7, n8]] = nums



//----------------------------------------------------------------------
// Obj-literal enhancements
//----------------------------------------------------------------------


// let name = "Nag";
// let age = 35;


// // es5

// let person1 = {
//     name: name,
//     age: age,
//     address: 'chennai-india',  //static property name
//     sayName:function(){
//         //..
//     }
// };

// // es6

// let addressType = "home"; // home | office | vacation | 
// let person2 = {
//     name,
//     age,
//     [addressType + '-address']: 'chennai-india', //dynamic property names
//     [1+2+3]:"six",
//     sayName(){
//         //...
//     }
// }








//----------------------------------------------------------------------
// class-syntax
//----------------------------------------------------------------------


//---------------------------------------------------

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.address = ""
//         console.log('Person::constructor');
//     }
//     sayName() {
//         console.log('im ' + this.name);
//     }
//     sayAge() {
//         console.log('im ' + this.age + " old");
//     }
// }

// let p1 = new Person('Nag', 35)

//---------------------------------------------------

// class Employee extends Person {
//     constructor(name, age, salary) {
//         super(name, age);
//         this.salary = salary;
//         console.log('Employee::constructor()');
//     }
//     saySalary() {
//         console.log('i get ' + this.salary + " only");
//     }
//     askForSalaryRaise() {
//         return this.salary * 0.02;
//     }
// }

// let e1 = new Employee('Nag', 35, 1000)

//---------------------------------------------------


// class Boss extends Employee {
//     // always default constructor exist, implicilty which invoke super constructor

//     askForSalaryRaise() {
//         return this.salary * 0.2 + super.askForSalaryRaise();
//     }

// }

// let boss1 = new Boss('Nag', 35, 1000)

//---------------------------------------------------


// class Abc {
//     static staMethod() {
//         console.log('static method..');
//     }
// }
// Abc.staVar1 = 1;
// Abc.staVar2 = 2;


//---------------------------------------------------


