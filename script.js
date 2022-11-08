const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const deskTop = document.getElementById("deskTop");
const mobile = document.getElementById("mobileVideo");
const vidGrid = document.getElementById("videoGrid");
let isSmallScreen = window.screen.width < 600;

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

if (isSmallScreen) {
  deskTop.style.display = "none";
} else {
  vidGrid.style.display = "none";
}

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
