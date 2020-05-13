function powerOf2(n) {
    debugger;
    let size = n.slice(0, 1);
    let output = "";
    // console.log("DEBUG_BOMB - WHAT IS N? [" + n + "]");
    if (isNaN.n === 0) {
        console.log("ERROR - No zeros dunbass!");
        return false;
    } else if (Array.isArray(n)) {
        for (let i = 0; i < n.length; i++) {
            // console.log("DEBUG_BOMB - ARRAY WHAT IS VALUE [" + n[i] + "]");
            if (n[i] === '') {
                console.log("continuing");
                output += "\n";
            } else if (n[i].isNaN === 0) {
                output += ' \n';
            } else if (n[i].match('[A-Za-z]')) {
                continue;
            }

            if (n[i] && (n[i] & (n[i] - 1)) === 0) {
                output += 1 + "\n";
            } else output += 0 + "\n";
        }
    } else {
        try {
            let newArr = n.split(' ');

            for (let i = 0; i < newArr.length; i++) {
                console.log("DEBUG_BOMB - STRING WHAT IS VALUE [" + newArr[i] + "]");
                if (typeof parseInt(newArr[i]) !== 'number' && typeof newArr[i] !== undefined) {
                    console.log("Not a number val [" + newArr[i] + " " + typeof newArr[i] + "] - continuing");
                    continue;
                } else if (newArr[i] === '') {
                    console.log("continuing");
                    continue;
                } else if (newArr[i].isNaN === 0) {
                    console.log("Not a number val [" + newArr[i] + "]");
                    continue;
                } else if (newArr[i].match('[A-Za-z]')) {
                    console.log("Char val [" + newArr[i] + "]");
                    continue;
                } else if (newArr[i] && (newArr[i] & (newArr[i] - 1)) === 0) {
                    output += 1 + "\n";
                } else output += 0 + "\n";
            }
        } catch (Exception) {
            console.log("ERROR - IOException thrown.");
        }
    }
    return output;
}

console.log(powerOf2('2\n4\n8\n16\n64\n75\n80'));
// console.log(powerOf2(['a', '8', '9', '16']));
// console.log(powerOf2('a 9 10 12 16'));