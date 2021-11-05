// learn unknown type
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "Me";
if (typeof userInput === "string") {
  userName = userInput;
}

// learn never type

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError("An error occurred!", 500);
