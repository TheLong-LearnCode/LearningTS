class Employee {
    public empCode: string;
    empName: string;

    constructor(code: string, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    getSalary() {
        return 10000;
    } 

    
}

let emp = new Employee("empCode", "empName");
emp.empCode = "123";
emp.empName = "Mary";

console.log("<<<< Check emp >>>>", emp);