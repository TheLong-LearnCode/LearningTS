// if else
let age: number = 25;

if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are a kid");
}

// switch case
let day: number = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// loop

console.log("FOR LOOPPPPPPPP");
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log("WHILE LOOPPPPPPPP");
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

console.log("DO WHILE LOOPPPPPPPP");

let counter = 0;
do {
  console.log("Counter = ", counter);
  if (counter == 5) break;
  counter++;
} while (counter < 10);


//continue

console.log("CONTINUE");
for (let i = 0; i <= 5; i++) {
  if (i == 3 || i == 5) continue;
  console.log(i);
}