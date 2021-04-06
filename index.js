const widget = document.querySelector(".widget");
const menu = document.querySelector(".menu");
const container = document.querySelector(".container");

function navigator(e) {
  const data = e.target.getAttribute("data");
  const shiftContainerByTop = 100 * parseInt(data) - 100;
  container.style.top = `-${shiftContainerByTop}vh`;
}

widget.addEventListener("click", navigator);
menu.addEventListener("click", navigator);
