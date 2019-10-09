const items = [
  {
    id: 1,
    name: 'foo',
    price: 2,
  },
  {
    id: 3,
    name: 'bar',
    price: 4,
  },
  {
    id: 66,
    name: 'bazz',
    price: 4,
  },
];

// query(items, { name: 'foo' })
// returns [{
// id: 1,
//   name: 'foo',
//     price: 2,
//   }]

// query(items, { price: 4 });
// returns [
//   ({
//     id: 3,
//     name: 'bar',
//     price: 4,
//   },
//   {
//     id: 66,
//     name: 'bazz',
//     price: 4,
//   })
// ];

// query(items, { price: 4, name: 'bazz' })
// returns [{
//   id: 66,
//     name: 'bazz',
//       price: 4,
//   }]

function query(arr, obj) {
  const searchTerms = Object.entries(obj);
  const found = []

  for (let i = 0; i < searchTerms; i++) {
    let pair = searchTerms[i];
    let key = pair[0];
    let value = pair[1];
    for (let j = 0; j < arr.length; j++) {
      let item = arr[j];
      if (item[key] === value) {
        found.push(item)
      }
      // if (item[key] !== value && found.length > 0) {
      //   found.pop()
      // }
    }
  } 

  return found;

}

// FullStack Solution

// sol1

const queryFSA = (arr, obj) => {
  const filteredObjects = [];
  for (let i = 0; i < arr.length; i++) {
    const currentObj = arr[i];

    // user filter object and compare its keys and values with the current object
    let cleanObj = true;

    for (let k in obj) {
      const filterValue = obj[k];
      if (currentObj[k] !== filterValue) {
        cleanObj = false;
      }
    }

    if (cleanObj) {
      filteredObjects.push(currentObj);
    }
  }
  return filteredObjects;
}

// sol2

const queryFsaTwo = (arr, obj) => {
  const filterEntries = Object.entries(obj);
  
  return arr.filter(obj => {
    return filterEntries.every((filterTuple) => {
      // const key = filterTuple[0];
      // const value = filterTuple[1];
      // with destructed syntax

      const [key, value] = filterTuple;
      // the above is naming a variable key and assigning it to index 0 of filterTuple
      // and naming a variable value and assigning it to index 1 of filterTuple
      return obj[key] === value;
    })
  })
}

module.exports = { query, items };
