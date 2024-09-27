function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

const reversedStrings = reverseArray(["apple", "banana", "cherry"]);
console.log(reversedStrings);

const reversedNumbers = reverseArray([10, 20, 30]);
console.log(reversedNumbers);
