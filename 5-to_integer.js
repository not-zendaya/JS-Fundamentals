const inputs = [89, "89", -4545, "-4545", "ALX"];

for (let i = 0; i < inputs.length; i++) {
  const value = inputs[i];
  const num = parseInt(value);
  if (!isNaN(num)) {
    console.log(`My number: ${num}`);
  } else {
    console.log("Not a number");
  }
}
