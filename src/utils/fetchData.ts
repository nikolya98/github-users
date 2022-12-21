import { RequestParams, ResponseType } from 'types/api';
import { BASE_URL } from 'config/endpoints';

/** Преобразует объёкт в строку типа 'key1=value1&key2=value2' */
const parseQuery = (query: Record<string, string | number>): string => {
  return Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

export const fetchData = async <T>({ endpoint, query }: RequestParams): Promise<ResponseType<T>> => {
  const url: RequestInfo = `${BASE_URL}${endpoint}${query ? `?${parseQuery(query)}` : ''}`;
  const options: RequestInit = {
    method: 'GET',
  };

  const errorResponse: ResponseType<T> = {
    isError: true,
    data: null,
  };

  try {
    const response = await fetch(url, options);

    if (response.ok) {
      return {
        isError: false,
        data: await response.json(),
      };
    }

    return errorResponse;
  } catch {
    return errorResponse;
  }
};
