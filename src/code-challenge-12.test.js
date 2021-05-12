import { toLastNames } from './code-challenge-12.js';

test('returns full names', () => {
  const input = [{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }]; // arrange
  const output = toLastNames(input); // act
  expect(output).toEqual(['Jane Doe', 'James Bond']); // assert
});

test('given an array of numbers as input, uses reduce to add the values in the array', () => {
  const input = [7, 15, 4, 25]; // arrange
  const output = addValues(input); // act
  expect(output).toEqual(51); // assert
});

test('given an array of objects as input, uses reduce to find the total amount purchased', () => {
  const input = [{
    item: 'switch',
    purchasePrice: 399
  },
  {
    item: 'PS4',
    purchasePrice: 1000
  }
  ]; // arrange
  const output = addPurchases(input); // act
  expect(output).toEqual(1399); // assert
});