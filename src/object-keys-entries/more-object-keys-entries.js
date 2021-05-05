export function getHouses(obj) {
  const array = Object.values(obj);
  return array.map(x => x.house);
}

export function updateNumbers(obj) {
  const arr = [];
  Object.keys(obj).forEach(key => {
    arr.push(`${key}: ${obj[key]}`);
  });
  return arr;
}

export function totalCharacters(arr) {
  let numOfCharacters = 0;
  arr.forEach(char => {
    if (char.spouse !== null) numOfCharacters++;
    if (char.children !== []) numOfCharacters += char.children.length;
    if (char.name !== '') numOfCharacters++;
  });
  return numOfCharacters;
}

export function hasChildrenEntries(arr, character) {
  let children = 0; 
  Object.entries(arr).forEach(x => {
    x.forEach(name => {
      if (name.name === character) {
        children = name.children.length > 0 ? true : false;
      }
    });
  });

  return children;
}

export function sortByChildren(arr){
  arr.sort((a, b) => {
    if (a.children.length < b.children.length) {
      return -1;
    } else {
      return 1;
    }
  });
  console.log(arr);
  return arr;
}

