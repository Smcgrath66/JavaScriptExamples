function arraySlice(n) {
  debugger;
  let output = "";
  console.log("DEBUG_BOMB - NOW WHAT IS N? [" + n + "]");
  if (isNaN.n === 0) {
    console.log("ERROR - No zeros dumbass!");
    return false;
  }
  try {
    let newArr = n.split("\n");
    let size = newArr.splice(0, 1);
    for (let i = 0; i < size; i++) {
      console.log("DEBUG_BOMB - STRING WHAT IS VALUE [" + newArr[i] + "]");
      if (typeof parseInt(newArr[i]) !== "number" && typeof newArr[i] !== undefined) {
        console.log("Not a number val [" + newArr[i] + " " + typeof newArr[i] + "] - continuing");
        continue;
      } else if (newArr[i] === "") {
        console.log("continuing");
        continue;
      } else if (newArr[i].isNaN === 0) {
        console.log("Not a number val [" + newArr[i] + "]");
        continue;
      } else if (newArr[i].match("[A-Za-z]")) {
        console.log("Char val [" + newArr[i] + "]");
        continue;
      } else if (newArr[i] && (newArr[i] & (newArr[i] - 1)) === 0) {
        output += 1 + "\n";
      } else output += 0 + "\n";
    }
  } catch (err) {
    console.log("ERROR - IOException thrown. " + err);
  }

  return output;
}

console.log(arraySlice("6\n4\n8\n16\n64\n75\n80"));
console.log(arraySlice("2\n64\n75"));
