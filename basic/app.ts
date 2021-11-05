function add(a: number, b: number) {
  return a + b;
}

const num1 = 5;
const num2 = 1;

const result = add(num1, num2);
console.log(result);

// learn object
const person: { name: string; age: number } = {
  name: "Me",
  age: 23,
};

const animal: {
  name: string;
  species: {
    first: string;
    second: string;
  };
} = {
  name: "cat",
  species: {
    first: "felix",
    second: "felus",
  },
};

console.log(person.name);

// learn array
const hobbies: string[] = ["eat", "sleeps"];

for (const hobby of hobbies) {
  console.log(hobby);
}

// learn tuple
const role: [number, string] = [2, "two"];

console.log(role);
