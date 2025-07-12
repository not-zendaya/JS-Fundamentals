const arg = process.argv[2];
const num = parseInt("ALX");
if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
