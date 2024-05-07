const validator = require('validator');
const chalk = require('chalk');


// console.log(validator.isEmail('adistydidis095@gmail.com'));
// console.log(validator.isMobilePhone('0812345678', 'id-ID'));
// console.log(validator.isMobilePhone('0812345678'));

// console.log(chalk.italic.bgBlue.black('Hello World!'));
const nama = 'Adisty';
const pesan = chalk`Lorem, ipsum dolor {bgRed.black.strikethrough sit amet} consectetur {bgGreen.italic.black adipisicing} elit. Nama saya : ${nama}`;

console.log(pesan);
