//tuples types
let skills: [boolean, string, number?]
// truyền vào phải đúng theo thứ tự type đã khai báo
skills = [true, 'JavaScript']

skills.push(true, 'TypeScript', 20)
console.log("<<<< Check skills >>>>", skills);

//enum type
enum API_STATUS {
    PENDING = "PENDING", 
    FULFILLED = "FULFILLED", 
    REJECTED = "REJECTED",
}

let a = API_STATUS.PENDING
let b = API_STATUS.FULFILLED
let c = API_STATUS.REJECTED

console.log("<<<< Check a >>>>", a);
console.log("<<<< Check b >>>>", b);
console.log("<<<< Check c >>>>", c);

//void type
const sum = (a: number, b: number): void => {
    console.log('Sum of a and b is: ', a + b);
}

// sử dụng khi không muốn trả về 1 giá trị cụ thể

sum(10, 20)

//never type
function handleException(errorMessage: string): never {
    throw new Error(errorMessage)
}

handleException('Something went wrong')