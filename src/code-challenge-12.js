export const toLastNames = people => {
  // Using .map()
  // Using Object.values

  const object = people.map(obj => Object.values(obj));

  const array = [];
  const name1 = object.flat().splice(0, 2).join(' ');
  const name2 = object.flat().splice(2, 5).join(' ');

  array.push(name1, name2);
  console.log(array);

  return array;

};

export const addValues = array => {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer);

};

export const addPurchases = array => {

  let testArray = [];

  for (let i = 0; i < array.length; i++) {

    testArray.push(array[i].purchasePrice);

  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return testArray.reduce(reducer);
};