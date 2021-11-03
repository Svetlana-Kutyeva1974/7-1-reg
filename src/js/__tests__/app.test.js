import Validator from '../basic.js';

test('test obj in app error', () => {
  expect(() => {
    const p = new Validator('45780');
  }).toThrow('Ошибка, имя содержит недопустимые символы');
});

test('test obj in app name', () => {
  const obj1 = new Validator('v7f45j78il');
  expect(obj1.name).toMatch(/v7f45j78il/);
});
