/**
 * Deep copy
 *
 * @param  {any} data
 * @return  {any} data
 */
export function deepCopy(data: any): any {
  return JSON.parse(JSON.stringify(data))
}
