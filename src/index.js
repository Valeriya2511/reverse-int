module.exports = function reverse (n) {
    let absol = Math.abs(n)
    const numberLength = absol.toString().length;
    let result = '';
      for (let i = 0; i < numberLength; i++) {
        let str = absol.toString();
        result = `${str[i]}${result}`
      }
  return result
}
