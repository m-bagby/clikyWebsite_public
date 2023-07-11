function toggleResponsiveNavDisplay() {
  const navList = document.getElementsByClassName("navList")[0];
  const navIcon = document.getElementsByClassName("navIcon")[0];

  if (navList.classList.contains("responsive")) {
    navList.classList.remove("responsive");
    navList.style.maxHeight = navIcon.offsetHeight + "px";
  }
  else {
    navList.classList.add("responsive");
    navList.style.maxHeight = navList.scrollHeight + "px";
  }
}