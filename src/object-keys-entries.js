export function capitalizeObjectKeys(obj) {
  const result = Object.keys(obj);
  return result.map(x => x.toUpperCase());
}

export function sortedKeys(obj) {
  const keys = Object.keys(obj);
  keys.sort(function(a, b) {
    return a.length - b.length;
  });
  return keys;
}

export function getFilteredKey(obj) {
  const keys = Object.keys(obj);
  const array = [];
  array.push(keys[2]);
  return array;
}

export function getArrayOfKeysAndValues(obj){
  const object = Object.entries(obj);
  return object;
}

export function sortedArraysByValuesLength(obj) {
  const object = Object.entries(obj);
  console.log(Object.values(obj));
  return object.sort((a, b) => (a.length > b.length) ? 1 : -1);
}