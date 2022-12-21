const pluralize = (n: number, one: string, few: string, many: string) => {
  if (n === 0) {
    return many;
  }

  let number = n;
  number = Math.abs(number);
  number %= 100;

  if (number >= 5 && number <= 20) {
    return many;
  }

  number %= 10;

  if (number === 1) {
    return one;
  }

  if (number >= 2 && number <= 4) {
    return few;
  }

  return many;
};

export const getPluralized = (n: number, one: string, few: string, many: string): string =>
  `${n} ${pluralize(n, one, few, many)}`;
