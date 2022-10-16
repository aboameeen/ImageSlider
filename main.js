// Get Slider Items | Array From (ES6)

let sliderimages = Array.from(
  document.querySelectorAll(".slider-container img")
);
// Get number of sliders

// console.table(sliderimages);
// console.log(sliderimages.length);
let slidesCount = sliderimages.length;

// set current slide
let currentSlide = 1;

// slide number element

let slideNumberElement = document.getElementById("slide-number");

// previous and next buttons

let nextButton = document.getElementById("next");

let prevButton = document.getElementById("prev");

// handle Click on next Slide
nextButton.onclick = nextSlide;

// handle Click on next Slide
prevButton.onclick = prevSlide;

// creat the main ul Element
let pagianationElement = document.createElement("ul");

// set ID on Created ul Element
pagianationElement.setAttribute("id", "pagination-ul");

// creat list item based on slides count

for (let i = 1; i <= slidesCount; i++) {
  // creat The Li
  let pagianationitem = document.createElement("li");

  // set  custom attribute
  pagianationitem.setAttribute("data-index", i);

  // set item content
  pagianationitem.appendChild(document.createTextNode(i));

  // append item to the main ul list

  pagianationElement.appendChild(pagianationitem);
}
// add the created ul to the page

document.getElementById("indicators").appendChild(pagianationElement);

// Get The new created UL
let paginationCreatedUl = document.getElementById("pagination-ul");

// Get Pagianation Item | Array.from
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// loop through all bullets items
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    thechecker();
  };
}

// trigger the checker Function
thechecker();

// next slide function

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    thechecker();
  }
}

//prev slide function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    thechecker();
  }
}

// create The Checker Function

function thechecker() {
  // set The Slide Number
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;

  //remove all active classes
  removeAllActive();

  //set active class on curren slide
  sliderimages[currentSlide - 1].classList.add("active");

  // set active class on current pagination item

  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  //check if current slide is the first
  if (currentSlide == 1) {
    // Add Disabled Class on previous Button
    prevButton.classList.add("disabled");
  } else {
    // remove Disabled class from previous Button
    prevButton.classList.remove("disabled");
  }
  //check if current slide is the last
  if (currentSlide == slidesCount) {
    // Add Disabled Class on next Button
    nextButton.classList.add("disabled");
  } else {
    // remove Disabled class from next Button
    nextButton.classList.remove("disabled");
  }
}
// remove All Active Classes from image and pagination bullets
function removeAllActive() {
  // loop through image

  sliderimages.forEach(function (img) {
    img.classList.remove("active");
  });

  // loop through pagination Bullets

  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
