function repeatString(str, count) {
    if (count <= 0) {
        return "";
    }
    return str.repeat(count);
}
var result = repeatString("Hello!", 3);
console.log(result);
