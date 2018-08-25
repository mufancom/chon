export function doubleDepthMerge<T>(a: T, b: T): T & {} {
  for (const key in a) {
    if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
      a[key] = Object.assign(a[key], b[key]);
    }
  }

  return Object.assign({}, b, a);
}

export function filterObject(
  obj: {[key: string]: any},
  filter: (key: string, value?: any) => boolean,
): object {
  let result: {[key: string]: any} = {};

  for (let key in obj) {
    if (filter(key, obj[key])) {
      result[key] = obj[key];
    }
  }

  return result;
}

export function omitKeys(obj: object, keys: string[]): object {
  return filterObject(
    obj,
    (key): boolean => {
      return !keys.includes(key);
    },
  );
}

export function selectKeys(obj: object, keys: string[]): object {
  return filterObject(
    obj,
    (key): boolean => {
      return keys.includes(key);
    },
  );
}
