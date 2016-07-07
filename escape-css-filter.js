export default () => {
    var specials = [
      '#', '&', '~', '=', '>', "'", ':', '"', '!', ';', ','
    ];
    var regexSpecials = [
      '.', '*', '+', '|', '[', ']', '(', ')', '/', '^', '$'
    ];
    var sRE = new RegExp(
      '(' + specials.join('|') + '|\\' + regexSpecials.join('|\\') + ')', 'g'
    );
    return selector => selector.replace(sRE, '\\$1');
};
