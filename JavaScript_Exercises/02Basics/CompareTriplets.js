function compareTriplets(a, b) {
    debugger;
    let res = [0, 0];
    let patt = new RegExp(/[2*]/g);
    let inputVar = 22;
    let result = inputVar.toString();
    console.log(patt.test(result));
    console.log("DEBUG - WHAT IS RESULT " + result);
    // let newA = a.split(" ");
    // let newB = b.split(" ");
    for (let i = 0; i < a.length; i++) {
        console.log(a[i] + " " + b[i]);
        if (a[i] !== b[i]) {
            a[i] > b[i] ? res[0]++ : res[1]++;
            // if (a[i] > b[i]) res[0]++;
            // else res[1]++;
        }
    }
    return res;
}

console.log(compareTriplets(["05", "06", "07"], ["03", "06", "11"]));