function calculate(a: number, b: number, c: string): number {
    if (c = "+") {
        return a + b
     } else if (c = "-"){
        return a - b
     } else if (c = "*"){
        return a * b
        } else if (c = "/"){
        return a / b
        } else
        alert("Введите корректные данные")
        
}

const a = 10;
const b= 10;
const c = "*";
const result = calculate(a, b, c)


console.log(`${a} ${c} ${b} = ${result}`);