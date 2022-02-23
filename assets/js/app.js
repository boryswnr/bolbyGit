let parallax = document.querySelector(".parallax");

let parallaxInstance = new Parallax(parallax, {
  relativeInput: true,
});

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  document.body.classList.toggle("menuOpen");
});

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-105%)";
      e.target.classList.add("active");
      // } else if (e.target.classList.contains("third")) {
      //   slides.style.transform = "translatex(-66.6666666667%)";
      //   e.target.classList.add("active");
    }
  }
});
