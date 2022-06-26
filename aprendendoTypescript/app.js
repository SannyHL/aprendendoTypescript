"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(2, 6));
console.log(somarValores("ola", "beleza?"));
console.log(somarValores("10", 9));
