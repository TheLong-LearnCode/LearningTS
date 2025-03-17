interface PersonPrototype {
    firstName: string;
    lastName: string;
}

interface PersonPrototype {
    age: number;
}


function getFullName(person: PersonPrototype) {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: "Thong",
  lastName: "Le",
};

console.log(getFullName(person)); // John Doe
