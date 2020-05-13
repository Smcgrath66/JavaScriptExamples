function howMany2s(n) {
    debugger;
    let patt = new RegExp("[2*]");
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let curI = i;
        let curLen = curI.toString().length;
        if (curLen > 1 && patt.test(curI)) {
            let curVal = (curI).toString().split("");
            for (let j = 0; j < curLen; j++) {
                if (patt.test(curVal[j])) {
                    count++;
                }
            }
        } else if (patt.test(curI)) {
            count++;
        }
    }
    return count;
}

// let count2 = 0;
let n = 200;
console.log(howMany2s(n));