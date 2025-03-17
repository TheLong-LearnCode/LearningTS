//functions
function add(a: number, b: number): number {
    return a + b;
}

console.log("SUM: " + add(10, 20));

const minute = (a: number, b: number) =>{
    return a - b;
}

console.log("Difference: " + minute(160, 30));

//function type
const sum3 = (a: number, b: number): number => {
    return a + b;
}

const test = sum3(10, 20);
console.log(typeof test)


//optional parameters
function add2(a: number, b: number, c?: number): number {
    if (c) {
        return a + b + c;
    }
    return a + b;
}

console.log("SUM2: " + add2(10, 50));

//default parameters
function add3(a: number, b: number, c: number = 10): number {
    return a + b + c;
}

console.log("SUM3: " + add3(10, 70));


//rest parameters
function add4(a: number, b: number, ...c: number[]): number {
    let result = a + b;
    c.forEach((num) => {
        result += num;
    });
    return result;
}

console.log("SUM4: " + add4(10, 50, 20, 30, 40));

//overloading function

function add5(a: number, b: number): number;
function add5(a: string, b: string): string;

function add5(a: any, b: any): any {
    return a + b;
}

console.log("SUM5: " + add5(10, 20));
console.log("SUM5: " + add5("Hello", "World"));
