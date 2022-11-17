import validateUsername from '../nikname';

test('checking true nikname', () => {
  const name = 'gjkd-gj68hjk_jghg';
  const result = validateUsername(name);
  expect(result).toBeTruthy();
});

test.each([
  ['first simbol', '-hkhj34-gj_1gj6j'],
  ['3 digits in a row', 'hjhk_0987hjhkh'],
  ['number at the end', 'gkkglffghdsj44-6'],
  ['number at the beginning', '6gkkglffghdsj44k'],
])('checking false nikname with %s', (_, name) => {
  const result = validateUsername(name);
  expect(result).toBeFalsy();
});
