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

function bestSales(sales) {
  let totalSales = {};
  const bestSale = {}
  if (sales.length === 0) {
    return bestSale;
  }

  sales.forEach(sale => {
      if (sale.productId === totalSales.id) {
        totalSales.amount += sale.amount;
      }
      else {
        totalSales.id = sale.productId;
        totalSales.amount = sale.amount;
      }
  })

  bestSale.id = null;
  bestSale.amount = 0;
  for (k in totalSales) {
    if (totalSales.amount > bestSale.amount) {
      bestSale.id = totalSales.id;
      bestSale.amount = totalSales.amount;
    }
  }

  return bestSale;
}

module.exports = { bestSales, sales };
