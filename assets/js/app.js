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

let activeButton = document.querySelector(".active");

function nextReview() {
  setTimeout(console.log("switch"), 5000);
  if (activeButton.classList.contains("first")) {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    document.querySelector(".second").classList.add("active");
    slides.style.transform = "translateX(-105%)";
  } else if (activeButton.classList.contains("second")) {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    document.querySelector(".first").classList.add("active");
    slides.style.transform = "translateX(-0%)";
  }
}

setInterval(nextReview, 5000);
