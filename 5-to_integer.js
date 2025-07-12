const testArgs = [undefined, "89", "-4545", "ALX"];

for (const arg of testArgs) {
  if (arg !== undefined && /^-?\d+$/.test(arg)) {
    console.log(`My number: ${parseInt(arg)}`);
  } else {
    console.log("Not a number");
  }
}
