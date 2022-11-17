import cleaningPhoneNumber from '../phonenum';

test.each([
  ['first 8, staples, spaces', '8 (927) 000-00-00', '+79270000000'],
  ['spaces', '+7 960 000 00 00', '+79600000000'],
  ['not first +7', '+86 000 000 0000', '+860000000000'],
])('checking clean numer with %s srtip and %i num', (_, num, expected) => {
  const result = cleaningPhoneNumber(num);
  expect(result).toBe(expected);
});
