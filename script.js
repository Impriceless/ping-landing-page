const button = document.querySelector("button");
const input = document.querySelector("input");
const invalid = document.querySelector(".invalid");

button.addEventListener("click", function() {
    if (input.matches(":invalid")) {
        invalid.classList.toggle("show");
    }
})