//Boolean type

let isDone: boolean = false;

//isDone = 'Thong' error message: Type 'string' is not assignable to type 'boolean'.

let pro: boolean = Boolean(1); //true
let pro1: boolean = Boolean(0); //false 

console.log("<<<< Check pro >>>>", pro);
console.log("<<<< Check pro1 >>>>", pro1);

// Object type
let obj: object = {
    name: 'Thong Le',
    age: 21,
    isMarried: false
}

//another way to create a new object

let person: {
    name: string,
    age: number,
    isMarried: boolean
} = {
    name: 'Alice',
    age: 30,
    isMarried: true
}

//person.address = 'HCM' error message: Type 'string' is not assignable to type '{ name: string; age: number; isMarried: boolean; }'.


console.log("<<<< Check obj >>>>", obj);
console.log("<<<< Check person >>>>", person);

// Array type

// Mix type in array
let arr1: (string | number)[] = ['Thong', 'Le', 'and', 'Purple'];

// Another way to create a new array
let arr2: [string, string, number] = ['Thong', 'Le', 20 ];

arr2.push('TypeScript', 109);
arr1.push(30)

console.log("<<<< Check arr1 >>>>", arr1);
console.log("<<<< Check arr2 >>>>", arr2);