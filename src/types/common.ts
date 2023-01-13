export type SnakeToCamelCase<S extends string | number | symbol> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S;

export type NormalizeApi<T> = {
  [Key in keyof T as SnakeToCamelCase<Key>]: T[Key];
};
