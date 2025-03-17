//union type
function addNumberOrString(a: number | string , b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

console.log("<<<< Check addNumberOrString >>>>", addNumberOrString(10, 20));
console.log("<<<< Check addNumberOrString >>>>", addNumberOrString('Thong', 'Le'));

// aliases type

type ThongType = number | string | boolean | object;

function addNumberOrString2(a: ThongType, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

console.log("<<<< Check addNumberOrString2 >>>>", addNumberOrString2(60, 20));
console.log("<<<< Check addNumberOrString2 >>>>", addNumberOrString2('Ngan', 'Purple'));
