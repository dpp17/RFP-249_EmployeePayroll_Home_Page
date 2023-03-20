
//setting range output
const value = document.querySelector(".salary-output");
const input = document.querySelector("#salary");
value.textContent = input.value;
input.addEventListener("input", (event) => {
value.textContent = event.target.value
});

