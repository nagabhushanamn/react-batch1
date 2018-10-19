"use strict"

/*

function binding
-------------------

=> function + object

2 types

1. static function-binding
2. dynamic function-binding


*/

//---------------------------------------------------------------------------------
// a. static function binding
//---------------------------------------------------------------------------------

// function sayNameForAll() {
//     console.log('im ' + this.name);
// }

// // sayNameForAll(); // error


// let p1 = {
//     name: 'Nag',
//     sayName: sayNameForAll // static function-binding
// }
// p1.sayName();

// let p2 = {
//     name: 'Ria',
//     sayName: sayNameForAll
// };
// p1.sayName();

// let employee = {
//     name: 'CTS',
//     doWork: function () {
//         console.log(this.name + " working");
//     }
// }

//---------------------------------------------------------------------------------
// b. dynamic function binding
//---------------------------------------------------------------------------------

// 
// function ctsReactTraining(when, duration) {
//     console.log(`the trainer ${this.name}, giving react training in cts : ${when},${duration} days`);
// }

// function ctsScalaTraining(when, duration) {
//     console.log(`the trainer ${this.name}, giving scala training in cts : ${when},${duration} days`);
// }

// let tnr = {
//     name: 'Nag'
// };
// let tnr2 = {
//     name: 'New Trainer'
// };

// // week-1
// tnr.ctsTraining = ctsReactTraining  // static function-binding
// tnr.ctsTraining();

// //week-2
// tnr.xxxTraining = xxxReactTraining // static function-binding
// tnr.xxxTraining();


// dynamic function binding

//way-1: call()
// ctsReactTraining.call(tnr, "oct", 10)
// ctsScalaTraining.call(tnr, "nov", 5)

//way-2: apply()
// ctsReactTraining.apply(tnr, ["oct", 10])
// ctsScalaTraining.apply(tnr, ["nov", 5])

//way-3: bind()
// let reactTngByNag = ctsReactTraining.bind(tnr, "oct", 10)
// reactTngByNag();
// reactTngByNag()

// let scalaTngNag = ctsScalaTraining.bind(tnr);
// scalaTngNag('oct', 5);
// scalaTngNag('nov', 10);

//---------------------------------------------------------------------------------

// summary

// function func() {
//     console.log(this);
// }
// func();

// // static function binding
// let o1 = {
//     name: 'O1',
//     f: func
// }

// // dynamic function binding
// let o2 = { name: 'O2' }
// func.call(o2)
// func.apply(o2)
// func.bind(o2)();


//---------------------------------------------------------------------------------

// let o = { name: "Joshua" }

// function tempNewWork() {
//     console.log("work by " + this.name);
// }

// tempNewWork.call(o);

//---------------------------------------------------------------------------------

// let person = { name: 'Nag' }
// Object.preventExtensions(person); // i.e we cannot add new properties

// function sayName() {
//     console.log('im ' + this.name);
// }

// // person.sayName = sayName// error
// sayName.apply(person);


//---------------------------------------------------------------------------------

// Quiz

// let pName="global";

// let person = {
//     pName: 'Nag', // obj's property
//     sayName: function () {
//         let pName = "local"; // scope's data
//         console.log('im ' + pName); // scope hierarchy data
//         console.log('im ' + person.pName); // refering obj's data
//         console.log('im ' + this.pName); // scope-owner's data
//     }
// };

// // person.sayName();
// let oldPerson = person
// person = { pName: 'Ria' }
// oldPerson.sayName();


//---------------------------------------------------------------------------------

// summary


// 'this'  ==> the owner of current scope


//---------------------------------------------------------------------------------

// Q

// princple :  code must closed for modification, open for extension
// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         let notes = ".js-notes";
//         let self = this;
//         let doLearn = function () {
//             console.log(this.name + ' learning with ' + notes + " from " + self.name);
//         }
//         console.log('teaching ends');
//         return doLearn
//     }
// }


// let learnFunc = tnr.doTeach();
// let emp = { name: "cts" };

// // learnFunc(); // error
// learnFunc.apply(emp)

// let tempTnr = { name: 'Ria' }
// learnFunc = tnr.doTeach.call(tempTnr)
// learnFunc.apply(emp);



//---------------------------------------------------------------------------------


// let i = 10;
// function func() {
//     console.log(i);
//     console.log(this);
//     console.log(this.i);
// }
// func();

