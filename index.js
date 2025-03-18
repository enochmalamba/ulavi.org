const closeMenu = document.getElementById("cls-menu-btn");
const openMenu = document.getElementById("open-menu-btn");
const header = document.getElementById("header");
const nav = document.getElementById("nav");

closeMenu.addEventListener("click", () => {
  if (window.innerWidth < 1200) {
    nav.style.transform = "translateX(-100%)";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  }
});

openMenu.addEventListener("click", () => {
  if (window.innerWidth < 1200) {
    nav.style.transform = "translateX(0)";
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
  }
});

// Function to handle scroll event
function handleScroll() {
  if (window.scrollY > window.innerHeight) {
    header.classList.remove("transparent");
  } else {
    header.classList.add("transparent");
  }
}

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);
