/*
    2 types
    --------
    1. simple / primitives ==> values
        a.  undefined
        b.  string
        c.  number
        d.  boolean
    2. complex / reference ==> objects
*/

//-----------------------------------------------------------------
// 1. simple / primitives ==> values
//-----------------------------------------------------------------
// a. undefined

var v;

//-----------------------------------------------------------------

//-----------------------------------------------------------------

// b. string
var name = "Nag";
var selection = 'abc';
var dynamicString = "the value is " + (12 + 13);
var dynamicString2 = `the value is ${12 + 13}` // es6 ==> string interpolation
var multiLineString = `
    line-1
    line-2
`;

//-----------------------------------------------------------------
// c. number

var count = 12;
var cost = 12.12;

//-----------------------------------------------------------------

//-----------------------------------------------------------------

// d. boolean

var found = true;

// imp-note :

/*
    
    falsy values:=> false,0,"",null,undefined,NAN
    
    ref : https://dorey.github.io/JavaScript-Equality-Table/
*/


//-----------------------------------------------------------------
// 2. complex / reference ==> objects
//-----------------------------------------------------------------

/*
how to create object in .js-language ?
syntax:
var ref = new Constructor()

till ES5,
    
    function ==> class/constructor

in es6,
            ==> class syntax

*/


/*
    ==> .js-lang is dynamic language

    by default 
    
    => all .js-objects are extensible i.e we can add new dynamic properties  as u need
    => also configurable

*/

// Es5
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p1 = new Person('Nag', 35)
var p2 = new Person('Ria', 3)
p1.address = "chennai"
delete p1.address


//es6
class NewPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var p3 = new NewPerson('Nag', 35)
var p4 = new NewPerson('Ria', 3)


//------------------------------------------------


//-----------------------------------------------------------------
// literal-style objects 
//-----------------------------------------------------------------

// a. Object

var config = new Object();
config.url = "http://"
config.httpMethod = "GET"
config.onSuccess = function () {
    console.log('im running on success..');
}

// or literal style


var newConfig = {
    url: "http://",
    httpMethod: 'POST',
    onSuccess: function () {
        //..
    }
}

//-----------------------------------------------------------------

// b. Array / List

var arr = new Array()

// or literal style

var newArr = [];

//-----------------------------------------------------------------


// c. RegExp

var re = new RegExp("\\d{10}")

// or  literal style

var newre = /\d{10}/;

//-----------------------------------------------------------------


// d. Function

var add = new Function("n1", "n2", "var result=n1+n2;return result;")

// or litral-style

function add(n1, n2) {
    var result = n1 + n2; return result;
}

//-----------------------------------------------------------------



// How to access obj's properties ?

var person = {
    'name': 'Nag',
    'home-address': 'chennai',
    1: "one",
    100: "hundred"
};

//way-1
person.name = "Nag N"
console.log(person.name);

//way-2
person["home-address"] = "chennai-india";
console.log(person["home-address"]);

console.log(person["1"]);
// or
console.log(person[1]);


//-----------------------------------------------------------------
