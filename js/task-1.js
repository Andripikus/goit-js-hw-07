const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const categoryElements = category.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
