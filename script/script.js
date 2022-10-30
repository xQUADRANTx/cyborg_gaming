const menuBar = document.querySelector(".menu-bar");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const navList = document.querySelector(".nav-list");
//functions
//it removes the nav bar
const removeNavBar = function () {
  line1.classList.remove("rotate-line-1");
  line2.classList.remove("vanish-line-2");
  line3.classList.remove("rotate-line-3");
  navList.classList.add("hidden");
};

//it shows navbar
const showNavBar = function () {
  line1.classList.add("rotate-line-1");
  line2.classList.add("vanish-line-2");
  line3.classList.add("rotate-line-3");
  navList.classList.remove("hidden");
};

//the navbar is removed first
removeNavBar();

menuBar.addEventListener("click", function () {
  if (line1.classList.contains("rotate-line-1")) {
    removeNavBar();
  } else {
    showNavBar();
  }
});
