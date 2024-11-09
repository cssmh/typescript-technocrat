const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 7, 8];

const total = [];
const letsMake = (array) => {
  array.forEach((element) => {
    if (!total.includes(element)) {
      total.push(element);
    }
  });
  return total;
};

letsMake(a);
letsMake(b);

const totalSimple = Array.from(new Set([...a, ...b]));
console.log(totalSimple);
console.log(total);
