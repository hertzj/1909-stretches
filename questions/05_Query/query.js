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
      let item = arr[i];
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


module.exports = { query, items };
