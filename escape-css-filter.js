export function escapeCssSelector() {
	var specials = [
	  '#', '&', '~', '=', '>',
	  "'", ':', '"', '!', ';', ','
	];
	var regexSpecials = [
	  '.', '*', '+', '|', '[', ']', '(', ')', '/', '^', '$'
	];
	var sRE = new RegExp(
	  '(' + specials.join('|') + '|\\' + regexSpecials.join('|\\') + ')', 'g'
	);
	
	return function (selector) {
		return selector.replace(sRE, '\\$1');
	}
};
