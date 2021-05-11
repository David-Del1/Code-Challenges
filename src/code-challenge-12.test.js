import { toLastNames } from './code-challenge-12.js';

test('Five and greater only', () => {
  const input = [{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }]; // arrange
  const output = toLastNames(input); // act
  expect(output).toEqual(['Jane Doe', 'James Bond']); // assert
});