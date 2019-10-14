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

module.exports = { checkAnagrams };
