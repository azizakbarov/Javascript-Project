const para = document.querySelector("p");

const paras = document.querySelectorAll("p");

paras.forEach((para) => {
  para.innerText += "new text";
  console.log(para.innerText);
});
