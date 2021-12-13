const logoRight = document.getElementById("logo-right");
const logoSearch = document.getElementById("logo-search");
const form = document.getElementById("form");
const listNav = document.getElementById("liste-nav");
const arrows = document.querySelectorAll(".arrow");

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

/////////////////////////////////
//////// SCROLL ON ARROW ////////
/////////////////////////////////
// function elementPosition(a) {
//   var b = a.getBoundingClientRect();
//   return {
//     clientX: a.offsetLeft,
//     clientY: a.offsetTop,
//     viewportX: b.x || b.left,
//     viewportY: b.y || b.top,
//   };
// }

// arrows.forEach((arrow) => {
//   arrow.addEventListener("click", function (e) {
//     var positions = elementPosition(arrow);
//     let heightScreen = e.view.innerHeight;
//     let positionArrow = positions.clientY;
//     let differenceHeightArrow = heightScreen - positionArrow;
//     let inject = heightScreen - differenceHeightArrow;
//     // console.log(inject);
//     console.log(positionArrow);
//     // console.log({
//     //   "Position horizontale dans la fenêtre": positions.clientX,
//     //   "Position verticale dans la fenêtre": positions.clientY,
//     //   "Position horizontale dans le document": positions.viewportX,
//     //   "Position verticale dans le document": positions.viewportY,
//     // });
//     // window.scroll(0, inject);
//   });
// });
