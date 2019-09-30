/*
Write a function that takes an object and an array of keys.
The function should return a new object with the keys from the array 
and the associated values from passed in object.

const obj1 = { a: 1, b: true };
pluck(obj1, ['a']));
returns  { a: 1};

const obj2 = { a: 1, b: true, c: 42 };
pluck(obj2, ['a', 'c']));
returns { a: 1, c: 42};

const obj3 = { a: 1, b: true, c: 42 };
pluck(obj3, ['a', 'c', 'x'])
returns { a: 1, c: 42};
*/

function pluck(obj, elements) {
  const newObj = {};
  elements.forEach(el => {
    if (obj[el] !== undefined) newObj[el] = obj[el];
  });

  return newObj;
}

// my solution

function pluckJH(obj, elements) {
  const newObj = {};
  for (let i = 0; i < elements.length; i++) {
    let el = elements[i];
    if (obj[el] !== undefined) {
      newObj[el] = obj[el]
    }
  }

  return newObj;
}

// could also make it more complicated for no real reason

function pluckAgain(obj, elements) {
  const newObj = {};
  const keys = Object.keys(obj);
  elements.forEach(el => {
    if (keys.indexOf(el) > -1) {
      newObj[el] = obj[el]
    }
  })
  return newObj;
}

module.exports = { pluck };
