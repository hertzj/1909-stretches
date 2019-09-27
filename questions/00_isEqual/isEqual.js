function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`

  const firstKeys = Object.keys(obj1);
  const secondKeys = Object.keys(obj2);
  let limit = 0;


  if (firstKeys.length >= secondKeys.length) {
    limit = firstKeys.length;
  }
  else {
    limit = secondKeys.length;
  }

  for (let i = 0; i < limit; i++) {
    let firstKey = firstKeys[i];
    let secondKey = secondKeys[i];

    if (firstKey !== secondKey) {
      return false;
    }

    else if (obj1[firstKey] !== obj2[secondKey]) {
      return false;
    }
  }

  return true;
}

module.exports = { isEqual };
