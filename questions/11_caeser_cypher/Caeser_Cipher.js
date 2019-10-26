// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  const alphabetLower = "abcdefghijklmnopqrstuvwxyz".split('');
  const alphaUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
  const nums = '0123456789'.split('');

  const original = str.split('');

  return original.map(char => {
    const indexAlphaLower = alphabetLower.indexOf(char);
    const indexAlphaUpper = alphaUpper.indexOf(char);
    const indexNum = nums.indexOf(char);

    if (indexAlphaLower > -1) {
      //  return alphabetLower[(indexAlphaLower + shift) % 25]
      return alphabetLower[((indexAlphaLower + shift) > 25 ? ((indexAlphaLower + shift) % 26) - 1 : indexAlphaLower + shift )]
    }
    else if (indexAlphaUpper > -1) {
      // return alphaUpper[(indexAlphaUpper + shift) % 25]
      return alphaUpper[((indexAlphaUpper + shift) > 25 ? ((indexAlphaUpper + shift) % 26) - 1 : indexAlphaUpper + shift )]
    }
    else {
      // return nums[indexNum + shift]
      return nums[((indexNum + shift) > 10) ? ((indexNum + shift) % 10) - 1 : indexNum + shift]

    }
  }).join('')
};

module.exports = { encryptString };
