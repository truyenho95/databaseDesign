const fs = require('fs');

const Product = (id, name, description, quantity, rank, price, category) => {
  this.productID = id;
  this.productName = name;
  this.productDescription = description;
  this.productQuantity = quantity;
  this.productRank = rank;
  this.unitPrice = price;
  this.categoryName = category;
};

const readFilePromise = path => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

async function loadData() {
  const products = JSON.parse(await readFilePromise('./products.txt'));
  const categories = JSON.parse(await readFilePromise('./categories.txt'));
  console.log(products, categories);
  return [products, categories];
}

loadData();
