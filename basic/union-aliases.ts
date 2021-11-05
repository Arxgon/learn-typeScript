// learn union
// function combine(in1: number | string, in2: number | string) {
//   let result;
//   if (typeof in1 === "number" && typeof in2 === "number") {
//     result = in1 + in2;
//   } else {
//     result = in1.toString() + in2.toString();
//   }

//   return result;
// }

// learn literal types
function combine(
  input1: number | string, // union types
  input2: number | string,
  resultConversion: "as-number" | "as-text" //literal types
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

// learn aliases / custom types
type Combinable = number | string;
type NewType = "whoa" | "whew";

const ex: Combinable = "a";
const ex2: NewType = "whoa";

// aliases in object

// /// //// example this:
// function greet(user: { name: string; age: number }) {
//   console.log("Hi, I am " + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

// /// //// to this:
type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
