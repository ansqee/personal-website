const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const menuCloseText = doc.querySelector(".closetext");
const menuCloseText2 = doc.querySelector(".closetext2");
const menuCloseText3 = doc.querySelector(".closetext3");
const menuCloseText4 = doc.querySelector(".closetext4");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseText.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseText2.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseText3.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseText4.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
