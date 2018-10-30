

//-----------------------------------------------------

// function func() {
//     let i = 0;
//     while (i < 5) {
//         console.log(i);
//         i++;
//     }
// }
// func()


//--------------------------------------------------------


// function* foo() {

//     let x = yield "please give me a value of x";
//     console.log(x);

//     let y = yield "please give me a value of y";
//     console.log(y);

//     let z = yield "please give me a value of z";
//     console.log(z);

//     return (x + y + z)
// }

//--------------------------------------------------------


//
function getFood1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("idly")
        }, 3000);
    });
    return promise;
}


function getFood2() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sambar")
        }, 4000);
    });
    return promise;
}


function* eat() {
    let food1 = yield getFood1();
    let food2 = yield getFood2();
    console.log('yummy ' + food1 + " + " + food2)
}



let it = eat();
it.next()
  .value.then(food1 => {
    it.next(food1)
         .value
        .then(food2 => it.next(food2))
})












