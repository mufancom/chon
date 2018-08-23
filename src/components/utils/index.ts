export function doubleDepthMerge<T>(a: T, b: T): T & {} {
  for (const key in a) {
    if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
      a[key] = Object.assign(a[key], b[key]);
    }
  }

  return Object.assign({}, b, a);
}
