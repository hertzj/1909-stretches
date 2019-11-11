const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
  let returned = []
  for (let i = 0; i < n; i++) {
    let val = func();
    returned.push(val);
  }
  return returned;
};

module.exports = { repeater };
