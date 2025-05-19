/**
 * 
 * @param obj  object
 * @param prefix  string
 * @returns object

 */
export function addPrefixClassName(obj: Record<string, string>, prefix: string) {
  const newObj: Record<string,string> = {};
  let counter = 1;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj,key)) {
      newObj[key] = `${prefix}_${counter} ${obj[key]}`;
      counter++;
    }
  }

  return newObj;
}
