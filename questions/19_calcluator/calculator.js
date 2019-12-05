// extra credit notes are from Russell's review
// one option is to make this.value into this._value EVERYWHERE to hide the true value
// and then to pass the tests which ask for this.value, set a getter method
// get value() { return this._value }
// but this is not ideal and would not pass the last test

// so a few ways we could do this
// one is to turn this.value into a variable inside the constructor
// let value = 0;
// and then to put all the functions into the constructor
// e.g. this.add => num => {
//     value += num;
//     return this;
// }
// and have this.getValue = () => {
//     return value;
// }
// and then have the getter outside the constructor return this.getValue();
// get value() {
//     return this.getValue()
// }
// could also be super cool and use private fields with #
// don't have a constructor and instead have #value = 0; before all the methods
class Calculator {
    constructor() {
        this.value = 0;
    }

    add(n) {
        this.value = this.value + n;
        return this
    }

    subtract(n) {
        this.value = this.value - n;
        return this
    }

    divide(n) {
        if (n === 0) {
            return this
        }
        this.value = this.value / n;
        return this
    }

    multiply(n) {
        this.value = this.value * n;
        return this
    }

    clear() {
        this.value = 0;
        return this;
    }
}

module.exports = { Calculator };
