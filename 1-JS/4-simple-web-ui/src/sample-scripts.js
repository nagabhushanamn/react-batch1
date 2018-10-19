

console.log('-sample-scripts-');


// - Stack-

//----------------------------------------------------
// #1
//----------------------------------------------------

// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }

// console.log(bar(7)); //returns 42


//----------------------------------------------------
// #2
//----------------------------------------------------


// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// debugger;
// baz();


//----------------------------------------------------
// #3
//----------------------------------------------------



// function foo(){throw new Error('oops')}
// function bar(){foo()}
// function baz(){bar()}
// baz();



//----------------------------------------------------
// #4
//----------------------------------------------------

// function foo(){
//     foo();
// }
// foo();



//----------------------------------------------------
// #5
//----------------------------------------------------

// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log('im long running')
//         i++;
//     }
// }
// function shortRunning(){
//     console.log('shrot running..');
// }

// longRunning();
// shortRunning();



//----------------------------------------------------
// #6
//----------------------------------------------------

/*

    <button class="veg">veg-1</button>
    <button class="veg">veg-2</button>
    <button class="non-veg">non-veg</button>

*/

// console.log('init...');

// $.on('.veg','click',function vegHandler(e){
//     console.log('handling event on veg elements');
// });

// $.on('.non-veg','click',function nonVegHandler(e){
//     console.log('handling event on non-veg elements');
// });
// console.log('cont with other work...');
// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log('im long running')
//         i++;
//     }
// }
// longRunning();


//----------------------------------------------------
// #7
//----------------------------------------------------

// Non-Blocking IO

// console.log('init');

// //IO  ==> interacting with  browser apis  ( DOM , XHR/Fetch , ...)
// setTimeout(function timeout(){
//     console.log('after timeout.. im executing');
// },1000);

// // sync
// window.alert("respond to me, then only others can happen in browser")

// // console.log('cont with other work..');
// // function longRunning() {
// //     var i = 0;
// //     while (i < 2) {
// //         console.log('im long running')
// //         i++;
// //     }
// // }
// // longRunning();



//----------------------------------------------------


// Quiz:


function doTeach() {
    let tnrName = "Nag"; // this will get moved to heap-memory on end-of-teach
    try {
        console.log(tnrName + '-teaching .js');
        //throw new Error(' - hate .js -')
        setTimeout(function () {
            console.log(tnrName + '-teaching react.js')
            //throw new Error(' - hate react.js -')
            console.log('teaching react.js ends')
        }, 3000);
        console.log('teaching .js ends');
    } catch (e) {
        console.log('i caught ' + e.message);
    }
}

doTeach();

//-----------------------------------------------------------