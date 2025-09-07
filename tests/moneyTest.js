import { formatCurrency } from "../scripts/utils/money.js";

console.log("test suite: format currency");

console.log("converts cents into dollaers");

if (formatCurrency(2095)==='20.95'){
    console.log("passed");
} else {
    console.log("failed");
}


console.log("works with 0 cents");
if (formatCurrency(0)=== '0.00'){
    console.log("passed");
} else {
    console.log("failed");
}


console.log("rounds uo to the nearest cent");
if (formatCurrency(2000.5)=== '20.01'){
    console.log("passed");
} else {
    console.log("failed");
}