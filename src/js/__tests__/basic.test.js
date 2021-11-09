import Validator from '../basic.js';

test('test error toThrow', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const obj = new Validator('45780');
    expect(obj.name).toMatch(/undefined/);
  }).toThrow(/Ошибка, имя содержит недопустимые символы/);
});

test('test начало строки', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const obj7 = new Validator('_57uy');
    expect(obj7.name).toMatch(/undefined/);
  }).toThrow(/Ошибка, имя содержит недопустимые символы/);
});

test('test конец строки', () => {
  // eslint-disable-next-line no-unused-vars
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const obj7 = new Validator('uy-');
    expect(obj7.name).toMatch(/undefined/);
  }).toThrow(/Ошибка, имя содержит недопустимые символы/);
});

test('test подряд 4 и более цифр', () => {
  expect(() => {
    const obj6 = new Validator('uyg676542hgd');
    expect(obj6.name).toMatch(/undefined/);
  }).toThrow(/Ошибка, имя содержит недопустимые символы/);
});

test('test name create in basic', () => {
  const obj1 = new Validator('vfjp');
  expect(obj1.name).toMatch(/vfjp/);
});

test('test только символы и цифры', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const obj7 = new Validator('oiuyщшгнку');
    expect(obj7.name).toMatch(/undefined/);
  }).toThrow(/Ошибка, имя содержит недопустимые символы/);
});
