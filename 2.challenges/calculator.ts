/**
 * Let's make a calculator
 */
console.log(calculate("add", 1, 3));
console.log(calculate("substract", 3, 1));
console.log(calculate("multiply", 4, 2));
console.log(calculate("divide", 4, 2));
console.log(calculate("remainder", 5, 2));

type CalculateType = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(type: CalculateType, a: number, b: number): number {
  switch(type) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw new Error("unknown type");
  }
}