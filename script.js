//tan = function getTanFromDegrees(degrees) {
//  return Math.tan((degrees * Math.PI) / 180);
//};
//
//let cells = document.querySelectorAll(".carousel .cell");
//angle = 360 / cells.length;
//i = 0;
//r = Math.round(130 / tan(36));
//carousel = document.querySelector(".carousel");
//
//carousel.style.transform = "translateZ(" + -r + "px)";
//next = document.querySelector(".next");
//prev = document.querySelector(".prev");
//
//function rotateCells() {
//  cells.forEach((cell) => {
//    cell.style.transform = "rotateY(" + i + "deg) translateZ(" + r + "px)";
//    i += angle;
//  });
//}
//
//rotateCells();
//
//function rotateCarousel() {
//  carousel.style.transform;
//}
//
//function rotateCarousel(n) {
//  carousel.style.transform = "translateZ(" + -r + "px) rotateY(" + i + "deg) ";
//}
//
//rotateCarousel(i);
//
//next.addEventListener("click", (e) => {
//  i -= angle;
//  rotateCarousel(i);
//});
//
//prev.addEventListener("click", (e) => {
//  i += angle;
//  rotateCarousel(i);
//});
//
