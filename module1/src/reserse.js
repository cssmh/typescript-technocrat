var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function reverseArray(arr) {
    return __spreadArray([], arr, true).reverse();
}
// Sample Input 1
var reversedStrings = reverseArray(["apple", "banana", "cherry"]);
console.log(reversedStrings); // ["cherry", "banana", "apple"]
// Sample Input 2
var reversedNumbers = reverseArray([10, 20, 30]);
console.log(reversedNumbers); // [30, 20, 10]
