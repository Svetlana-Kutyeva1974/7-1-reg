export default class Validator {
  constructor(name) {
    const result = function (username) {
      if (/^[\w-]+$/.test(username) === false) {
        console.log(username, '1В логине должны быть только латинские буквы, -,_');
        return false;
      }
      if (/^[\d-_]/.test(username) === true) {
        console.log(username, 'Логин не должен начинаться  с цифры,- или _');
        return false;
      }
      if (/[\d-_]$/.test(username) === true) {
        console.log('Логин не должен заканчиваться с цифры,- или _');
        return false;
      }
      if (/\d{4}/.test(username) === true) {
        console.log('Логин не должен содержать подряд более трёх цифр');
        return false;
      }
      return true;
    };
    if (!result(name)) {
      throw new Error(/Ошибка, имя содержит недопустимые символы/);
    } else {
      this.name = name;
    }
  }
}
