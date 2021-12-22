// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("You clicked me!");
// });

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log("item clicked");
    e.target.style.textDecoration = "line-through";
  });
});
