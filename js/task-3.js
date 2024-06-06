document.querySelector("#name-input").addEventListener("input", function () {
  const name = this.value.trim();
  const output = document.querySelector("#name-output");

  output.textContent = name !== "" ? name : "Anonymous";
});

