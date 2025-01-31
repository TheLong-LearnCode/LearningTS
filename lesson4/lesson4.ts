 let test: number = 9.6;

//  test = "abc"; // Error: Type 'string' is not assignable to type 'number'.

const test2: number = 0.4;
// test2 = 3; // Error: Cannot assign to 'test2' because it is a constant.

console.log("<<<< Check sum >>>>", test + test2);
// console.log("<<<< Check sum >>>>", test + test2 + "abc"); // Error: Operator '+' cannot be applied to types 'number' and 'string'.