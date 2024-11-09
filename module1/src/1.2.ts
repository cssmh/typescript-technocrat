{
  type MyFunction = (para1: number, para2: number) => number;

  const total: MyFunction = (para1, para2) => {
    return para1 + para2;
  };

  console.log(total(5, 1));
}
