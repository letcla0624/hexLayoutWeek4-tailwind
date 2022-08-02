const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
let openMenu = false;

window.addEventListener("resize", reportWindowSize);
menuIcon.addEventListener("click", () => {
  openMenu = !openMenu;
  if (openMenu) {
    menu.classList.remove("h-0");
    menu.classList.add("h-auto");
    menuIcon.innerText = "close";
  } else {
    reportWindowSize();
  }
});

function reportWindowSize() {
  menu.classList.add("h-0");
  menu.classList.remove("h-auto");
  menuIcon.innerText = "menu";
  openMenu = false;
}
