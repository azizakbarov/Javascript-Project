// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("You clicked me!");
// });

const ul = document.querySelector("ul");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  //   ul.innerHTML += "<li> something new </li>";
  const li = document.createElement("li");
  li.textContent = "something new todo";
  //   ul.append(li);
  ul.prepend(li);
});

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log("item clicked");
    // e.target.style.textDecoration = "line-through";
    e.target.remove();
  });
});
