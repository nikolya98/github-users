export type RequestParams = {
  endpoint: string;
  query?: Record<string, string | number>;
};

export type ResponseType<T> =
  | {
      isError: false;
      data: T;
    }
  | {
      isError: true;
      data: null;
    };
