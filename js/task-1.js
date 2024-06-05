const categoriesList = document.getElementById("categories");

const categories = categoriesList.getElementsByClassName("item");

console.log(`Number of categories: ${categories.length}`);

Array.from(categories).forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const categoryItems = category.querySelectorAll("ul > li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
