const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const arrLi = ingredients.map((name) => {
  const liEl = document.createElement("li");
  liEl.textContent = name;
  liEl.classList.add("item");

  return liEl;
});
console.log(arrLi);
ingredientsEl.append(...arrLi);
