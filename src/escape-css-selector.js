const specials = [
  '#', '&', '~', '=', '>', "'", ':', '"', '!', ';', ','
];
const regexSpecials = [
  '.', '*', '+', '|', '[', ']', '(', ')', '/', '^', '$'
];
const sRE = new RegExp(
  `(${specials.join('|')}|\\${regexSpecials.join('|\\')})`, 'g'
);
export default selector => selector.replace(sRE, '\\$1');

