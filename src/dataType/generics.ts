const func4 = (n: number): number => {
  return n;
};

const filterByPeoples = <T, U extends keyof T>(
  arr: T[],
  key: U,
  value: T[U]
): T[] => {
  return arr.filter((item) => item[key] === value);
};

const func7 = <K>(arr: K) => {};
