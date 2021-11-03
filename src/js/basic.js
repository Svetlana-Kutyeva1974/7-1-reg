export default class Validator {
  // static regex = /^[a-z\d_]{4,16}$/;
  // static regex = /^[\w-]$|[\d\d\d\d]$/;

  constructor(name) {
    if (!this.validateUsr(name)) {
      throw new Error('Ошибка, имя содержит недопустимые символы');
    } else {
      this.name = name;
    }
  }

  validateUsr(username) {
    // return /^[\w-]$|^[\d\d\d\d]$/.test(username);
    console.log('проверка результат', username, /^[a-zA-Z0-9]+$/.test(username));
    // return /^[a-zA-Z1-9]+$/.test(username);
    return /^[a-zA-Z0-9]+$/.test(username);
  }
}
