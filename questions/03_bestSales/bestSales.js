const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function matcher(list, obj) {
  for (let i = 0; i < list.length; i++) {
    let newObj = list[i];
    if (newObj.id === obj.productId) {
      return true;
    }
  }
  return false;
}


// eslint-disable-next-line complexity
function bestSales(sales) {
  let totalSales = [];
  const bestSale = {}
   
  if (sales.length === 0) {
    return bestSale;
  }

  for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];
    if (totalSales.length === 0) {
      let totalSale = {};
      totalSale.id = sale.productId;
      totalSale.total = sale.amount;
      totalSales.push(totalSale);
      continue;
    }

    else if (matcher(totalSales, sale)) {
      for (let j = 0; j < totalSales.length; j++) {
        let totalSale = totalSales[j];
        if (sale.productId === totalSale.id) {
          totalSale.total += sale.amount;
          break;
        }
      }
      continue;
    }

    else {
      let totalSale = {};
      totalSale.id = sale.productId;
      totalSale.total = sale.amount;
      totalSales.push(totalSale);
    }
    
  
  }

  bestSale.id === null;
  bestSale.total = 0;

  for (let i = 0; i < totalSales.length; i++) {
    let totalSale = totalSales[i];
    if (totalSale.total > bestSale.total) {
      bestSale.id = totalSale.id;
      bestSale.total = totalSale.total
    }
  }


  return bestSale;
}




module.exports = { bestSales, sales };
