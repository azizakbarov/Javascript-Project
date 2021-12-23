const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,}$/;

  if (usernamePattern.test(username)) {
    feedback.textContent = "username is valid";
  } else {
    feedback.textContent =
      " username must be letters only & must contain more than 6 characters";
  }
});

// const username = "azizbek";

// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);

// if (result) {
//   console.log("Regex test is successful");
// } else {
//   console.log("Regex test failed");
// }
