export const concatUrl = (
  keys: any[], mapKey: string,
): string => `${keys.map((ele) => `&${mapKey}[]=${ele}`).join('')}`
