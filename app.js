const sidebar = document.getElementById("offcanvasScrolling");

document.getElementById("sidebar-show").addEventListener("click", () => {
  if (sidebar.className.includes("show")) {
    document.body.style.paddingLeft = "300px";
    document.body.style.transition = "all 0.2s linear";
    document.getElementById("sidebar-show").style.display = "none";
  }
});
document.querySelector(".btn-close").style.color = "white";
document.querySelector(".btn-close").addEventListener("click", () => {
  document.body.style.paddingLeft = "0";
  document.body.style.transition = "all 0.3s linear";
  document.getElementById("sidebar-show").style.display = "block";
});
