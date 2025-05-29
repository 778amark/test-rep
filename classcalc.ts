class Calculator {
    add(a: number, b: number) {
        return a + b;
    }
    subtract(a: number, b: number) {
        return a - b;
    }
    multiply(a: number, b: number) {
        return a * b;
    }
    divide(a: number, b: number) {
        return a / b;
    }
    

}
const calculator = new Calculator();
    console.log(calculator.add(5,5));