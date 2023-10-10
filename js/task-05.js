const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onChange);

function onChange(e) {
  const text = e.target.value;
  outputEl.textContent = text.trim() ? text : "Anonymous";
}
