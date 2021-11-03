import Validator from '../basic.js';

test('test error in basic', () => {
  expect(() => {
    const obj = new Validator('45780');
  }).toThrow(/Ошибка, имя содержит недопустимые символы/);
});

test('test name in basic', () => {
  const obj1 = new Validator('vfjp');
  expect(obj1.name).toMatch(/vfjp/);
});
