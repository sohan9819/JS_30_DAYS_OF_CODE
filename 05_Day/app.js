const panels = document.querySelectorAll(".panel");
function toggleOpen() {
  //   console.log(e.target.classList);
  this.classList.toggle("open");
}
function toggleClose(e) {
  //   console.log(e.target.classList);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleClose);
});
