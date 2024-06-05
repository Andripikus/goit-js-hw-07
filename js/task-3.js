document.getElementById("name-input").addEventListener("input", function() {

    const name = this.value.trim();

    if (name !== "") {
        document.getElementById("name-output").textContent = name;
    } else {
        document.getElementById("name-output").textContent = "Anonymous";
    }
});