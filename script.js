let notify = document.querySelector(".notify");
let input = document.getElementById("input");
let worning = document.querySelector(".invalid");

notify.addEventListener("click", () => {
  email = input.value;
  if (!validateEmail(email)) {
    input.classList.add("inV");
    worning.style.display = "block";
  }
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
