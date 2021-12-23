const copy = document.querySelector(".copy-me");

copy.addEventListener("copy", () => {
  console.log("OI! My content is a copyright!");
});

const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  //console.log(e)
  box.textContent = ` x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});
