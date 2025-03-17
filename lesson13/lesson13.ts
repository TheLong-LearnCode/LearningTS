interface PersonPrototype {
    firstName: string;
    lastName: string;
}


function getFullName(person: PersonPrototype) {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: "Thong",
  lastName: "Le",
};

console.log(getFullName(person)); // John Doe
