document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btn");
    const navList = document.querySelector(".nav-list");
    const btnIcon = btn.querySelector("i");

    btn.addEventListener("click", function () {
      navList.classList.toggle("active");
      if (navList.classList.contains("active")) {
        btnIcon.classList.remove("bi-list");
        btnIcon.classList.add("bi-x");
      } else {
        btnIcon.classList.remove("bi-x");
        btnIcon.classList.add("bi-list");
      }
    });
  });