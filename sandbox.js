const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.username.value);
});

const username = "azizbek";

const pattern = /^[a-z]{6,}$/;

let result = pattern.test(username);

if (result) {
  console.log("Regex test is successful");
} else {
  console.log("Regex test failed");
}
