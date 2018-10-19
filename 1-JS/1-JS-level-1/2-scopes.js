

/*

    scope / execution-context
    --------------------------

    ------------------------------------------------------------------

    memory/stack-frame which contains arg & local variables
    to execure set of instructions

    phase-1: creation/push

            =>  variable declared with 'var' keyword anywhere, 
                always get hoisted to top with default value ( undefined )
    
    phase-2: execution/pop

            => instructions will execute in seq.

    ------------------------------------------------------------------
    imp-note :
    ==>every javascript has one global-scope default 
    ==> every function invocation alos create new-scope,
        which is child of in-which scope that function has declared/created
    ------------------------------------------------------------------

*/

// ------------------------------------------------------------------
// var v=12;
// console.log(v);
// ------------------------------------------------------------------

// var v = 12;
// function f1() {
//     console.log(v)
//     var v=13;
//     console.log(v);
// }
// f1(); // f1-scope  <--  global-scope

// ------------------------------------------------------------------

// Quiz

// var v = 12;
// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     f2(); // f2-scope  <--- f1-scope
//     var v = 13;
// }
// f1(); // f1-scope  <--- global-scope

// ------------------------------------------------------------------

// var v = 12;
// var v = 13;

// ------------------------------------------------------------------

// var v = 12;
// if (true) {
//     var v = 13;
// }
// console.log(v)

// ------------------------------------------------------------------



/*
 problems 'var' keyword :

    => variables get hoist
    => can re-declare same-variable whithin scope
    => No block-scope for variables
 
    soln:

    => using 'let' & 'const' keywords with block scope  ( es6 )

*/

// ------------------------------------------------------------------

// console.log(v); // reference error
// let v = 12;
// console.log(v);

// ------------------------------------------------------------------

// let v=12;
// let v=13; // syntax error

// ------------------------------------------------------------------

// let v = 12;
// if (true) {
//     let v = 13;
// }
// console.log(v); // 12

// ------------------------------------------------------------------

// let v = 12;
// v = 13;  // mutatable reference

// const v2 = 13;
// // v2 = 14; // TypeError ==> immutable reference

// ------------------------------------------------------------------

// Quiz

// const trainer = {
//     name: 'Nag',
// };
// trainer=null; // error
// trainer.name = "New Trainer" // ok

// ------------------------------------------------------------------

// summary :
/*
    ==> use 'let' keyword, for mutable reference
    ==> use 'const' keyword, for immutable reference
    ==> avoid 'var' keyword, for better code
*/

// ------------------------------------------------------------------







