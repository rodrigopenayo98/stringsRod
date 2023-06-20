exports.stringLength = function(str) {
  if (str.length > 0 && str.length < 10) {
    return str.length;
  }
};

exports.reverseString = function(str) {
  return str.split("").reverse().join("");
};


