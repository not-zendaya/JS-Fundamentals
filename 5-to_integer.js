const arg = process.argv[2];
const num = parseInt(89);

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
const num1 = parseInt(-4545);

if (!isNaN(num1)) {
  console.log(`My number: ${num1}`);
} else {
  console.log("Not a number");
}
const num2 = parseInt("ALX");

if (!isNaN(num2)) {
  console.log(`My number: ${num2}`);
} else {
  console.log("Not a number");
}
