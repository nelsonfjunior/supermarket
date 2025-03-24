const data01 = require("./data.js");

const normalizeText = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .sort()
    .join(" ");

const categorizeProducts = (data) => {
  const categories = {};

  data.forEach((product) => {
    const normalizedTitle = normalizeText(product.title);

    if (!categories[normalizedTitle]) {
      categories[normalizedTitle] = {
        category: normalizedTitle,
        count: 0,
        products: [],
      };
    }

    categories[normalizedTitle].count++;
    categories[normalizedTitle].products.push(product);
  });

  return Object.values(categories);
};

const categorizedData = categorizeProducts(data01);
console.log(JSON.stringify(categorizedData, null, 2));
