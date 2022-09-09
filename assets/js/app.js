const timeout = async time => await new Promise(resolve => setTimeout(() => resolve(), time));
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
let intervId;

function nextReview() {
  if (activeButton.classList.contains("first")) {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    document.getElementById("secondBtn").classList.add("active");
    slides.style.transform = "translateX(-105%)";
    activeButton = document.querySelector(".active");
  } else if (activeButton.classList.contains("second")) {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    document.getElementById("firstBtn").classList.add("active");
    slides.style.transform = "translateX(-0%)";
    activeButton = document.querySelector(".active");
  }
}



function reviewTimer() {
    intervId = setInterval(nextReview, 4000);
}

reviewTimer();

const project = document.querySelector(".workCategory");
const projectList = document.querySelectorAll(".workCategory");
let classToDisplay = "all";
const projectTiles = document.querySelectorAll(".workTile");
const listItems = document.querySelectorAll(".workCategory");

function sortItems(item) {
    if (!(item.classList.contains(classToDisplay.toLowerCase()))) {
        //console.log("sortItem items classlist:", item.classList);
        item.classList.add("hide");
    }
}

listItems.forEach(element => {
    element.addEventListener("click", e => {
        projectList.forEach(item => item.classList.remove("activeItem"));
        e.path[0].classList.add("activeItem");
      classToDisplay = e.path[0].innerText.toLowerCase();
      console.log("classToDisplay:", classToDisplay);
        if (classToDisplay === "everything") {
            projectTiles.forEach(item => {
                console.log("item", item)
                item.classList.remove("hide")
            });
        } else {
            projectTiles.forEach(tile => tile.classList.remove("hide"));
            projectTiles.forEach(element => sortItems(element));
        }        
    })
})
