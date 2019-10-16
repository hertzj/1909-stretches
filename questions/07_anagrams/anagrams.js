// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }

  const str1Sorted = str1.split('').sort().join('')
  const str2Sorted = str2.split('').sort().join('')

  return str1Sorted === str2Sorted;

};

// FSA solution

const checkAnagramsFSA = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }

  // one solution Russell gives is the sorted solution I came up with above
  // another is to use an object
  // the object method runs fewer loops since the array methods
  // are actually loops
  // so the object one takes less time

  const letters1 = {};
  const letters2 = {};

  for (let i = 0; i < str1.length; i++) {
    const current = str1[i];
    if (current in letters1) {
      letters1[current]++
    }
    else {
      letters1[current] = 1
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const current = str2[i];
    if (current in letters2) {
      letters2[current]++
    }
    else {
      letters2[current] = 1
    }
  }

  for (const letter in letters1) {
    if (letters1[letter] !== letters2[letter]) {
      return false
    }
  }

  return true;

}

module.exports = { checkAnagrams };
