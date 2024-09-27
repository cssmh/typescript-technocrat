function repeatString(str: string, count: number): string {
  if (count <= 0) {
    return "";
  }
  return str.repeat(count);
}

const result = repeatString("Hello!", 3);
console.log(result);
