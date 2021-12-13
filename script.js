const logoRight = document.getElementById("logo-right");
const logoSearch = document.getElementById("logo-search");
const form = document.getElementById("form");
const listNav = document.getElementById("liste-nav");
const arrows = [...document.querySelectorAll(".arrow")];
const logoFooter = document.getElementById("logo-footer");

let screenWidth;

//////////////////////////////////
// MENUBURGER EN DESSOUS 1150PX //
//////////////////////////////////

logoRight.addEventListener("click", (e) => {
  screenWidth = e.view.innerWidth;

  if (screenWidth < 1150) {
    listNav.classList.toggle("toListNav");
  }
});

//////////////////////////////////
////////// INPUT SEARCH //////////
//////////////////////////////////
logoSearch.addEventListener("click", () => {
  form.classList.toggle("block");
});

///////////////////////////////
////// SCROLL ON ARROW ////////
///////////////////////////////

arrows.forEach((arrow) => {
  arrow.addEventListener("click", function (e) {
    let heightParent = e.view.innerHeight;
    let indexArrow = arrows.indexOf(this) + 1;

    window.scrollTo(0, heightParent * indexArrow);
  });
});

///////////////////////////////
////// SCROLL TO ACCUEIL //////
///////////////////////////////
logoFooter.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
