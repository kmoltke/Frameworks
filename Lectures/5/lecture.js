"use strict";

let a = "hey";
let y = test(a);

function test(x) {
    return x;
}


console.log(y);

let b = function () {
    return 5;
};

/**
 *
 * @param n1
 * @returns {function(*): *}
 */
function generateAddFun(n1) {
    let fAdd = function (n2) {
        return n1+n2;
    }
    return fAdd;
}

let incFun = generateAddFun(1);
console.log(incFun);

let arr = [10, 20, 30, 40];
arr.forEach((e, i) => {
    console.log("Index: %d \nElement: %d", i, e)
});

