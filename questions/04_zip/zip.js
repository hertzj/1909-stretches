/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  let zipped = {};
  objs.forEach(obj => {
    for (const k in obj) {
      if (zipped[k] === undefined) {
        zipped[k] = obj[k];
      }
      else {
        zipped[k] += obj[k];
      }
    }
  })
  return zipped;
}

// FSA solution

function zipFSA(objs) {
  return objs.reduce((accum, curr) => {
    for (const k in curr) {
      if (k in accum) {
        accum[k] += curr[k]
      }
      else {
        accum[k] = curr[k];
      }
    }
    return accum;
  })
}

module.exports = { zip };
