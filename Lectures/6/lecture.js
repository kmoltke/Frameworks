async function test() {
    let calc = 0;
    try {
        calc = 1 +1;
    } catch (e) {
        console.log("error!");
    }
    return calc;
}

class Person {

}

class Student extends Person {
    constructor() {
        super();
    }
}


const myprvate = 10;

export const myExported = 20;

new Student();