function greet(){
    console.log("Hi!! I Love You!!")
}

function diss(){
    console.log("You are the worst!!")
}

function repeat3x(func) {
    func();
    func();
    func();
}

function repeat(num, func) {
  for(let i = 0; i < num; i++){
    func();
  }
}

let funcs = [greet, diss]
//funcs[0]()

const myFunc = function add(x, y){
    return x + y;
}

function overIt(){
    console.log("I'm over it!!")
    return function yell(){
        return "AHHHHHHH"
    }
}
//overIt()()
//const func = overIt()

function makeMultiplyFunc(num){
    return function mult(x){
        return num * x;
    }
}
//const quad = makeMultiplyFunc(4)
//quad
//const double = makeMultiplyFunc(2)
//double(9)

// greet();
// alert("I am alert!")
// diss();

// greet();
// // setTimeout(function, delay)
// setTimeout(diss, 3000)

// setInterval(diss, 3000)

// setTimeout(function() {
//     diss();
//     diss();
//     diss();
// }, 3000)

// function doTwice(func){
//     func();
//     func();
// }

// doTwice(function() {
//     console.log("You're the best...");
//     console.log("around");
// })

// const test = function() {
//     console.log("test")
// }

