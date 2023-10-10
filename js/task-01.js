const categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent}\nElements: ${element.lastElementChild.children.length}`
  );
});
