
let current = 1;
const total = 8;
const image = document.getElementById("productImage");

image.addEventListener("click", () => {
  current = (current % total) + 1;
  image.src = `360/frame${current}.jpg`;
});
