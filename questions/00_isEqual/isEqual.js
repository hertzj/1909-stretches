function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
<<<<<<< HEAD

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

// FSA solution

function isEqualFsa(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
  }
=======
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    }
  }

>>>>>>> 8432be207daf1864355556d3004c3cd3723c3882
  return true;
}

module.exports = { isEqual };
