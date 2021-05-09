export function howMuchPencil(str) {
  const array = [];
  for (let i = 0; i <= str.length; i++) {
    array.push(str.slice(i, str.length));
  }
  return array;
}

export function wordsToCharList(str) {
  return str.split('');
}

 

export function listFoods(recipe){
  const array = recipe.ingredients.map(x => x.split(' ').splice(2).join(' '));
  return array;
}

export function removeLastCharacters(str, numberOfCharacters){
  for (let i = 0; i <= str.length; i++) {
    if (numberOfCharacters < 0) {
      return str;
    }
    if (numberOfCharacters > str.length) {
      return '';
    }
    return str.slice(i, -numberOfCharacters);
  }
}
