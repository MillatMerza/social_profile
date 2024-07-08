var e = document.querySelector(".btn-white");

e.addEventListener("click", function () {
  document.body.classList.toggle("white-mode");

  if (document.body.classList.contains("white-mode")) {
    e.textContent = " Dark Mode";
  } else {
    e.textContent = "White Mode";
  }
});