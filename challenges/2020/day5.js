const str = 'abcdededeab';

const pattern = new RegExp(/(.{2})+(.)/i);

str.match(pattern);

console.log(str.match(pattern));
