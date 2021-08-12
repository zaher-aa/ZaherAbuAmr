const links = document.querySelectorAll(".nav-links li a");
const navButton = document.querySelector(".bars");
const header = document.querySelector("header");
const scrollToTop = document.getElementById("to-top");
const colorOptions = document.querySelector(".color-options");
const painBrush = document.querySelector(".color-options .paint-brush");
const colors = document.querySelectorAll(".color-options .colors li");

let removeAllActive = () => {
  links.forEach((link) => {
    for (let l of links) {
      l.classList.remove("active");
    }
  });
};

let resetActive = (links, dataCategory) => {
  links.forEach((link) => {
    if (link.dataset.category === dataCategory) {
      link.classList.add("active");
    }
  });
};

navButton.onclick = () => {
  header.classList.toggle("show");
};

window.onscroll = () => {
  if (window.scrollY > 1) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  if (window.scrollY > 70) {
    scrollToTop.classList.add("scrolled");
  } else {
    scrollToTop.classList.remove("scrolled");
  }
  if (window.scrollY < 684) {
    removeAllActive();
    resetActive(links, "home");
  }
  if (window.scrollY > 684) {
    removeAllActive();
    resetActive(links, "services");
  }
  if (window.scrollY > 1300) {
    removeAllActive();
    resetActive(links, "experties");
  }
  if (window.scrollY > 2100) {
    removeAllActive();
    resetActive(links, "projects");
  }
  if (window.scrollY > 1815 + 2100) {
    removeAllActive();
    resetActive(links, "githubrepos");
  }
  if (window.scrollY > 1815 + 2100 + 1500) {
    removeAllActive();
    resetActive(links, "contact");
  }
};

scrollToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

painBrush.onclick = () => colorOptions.classList.toggle("active");

colors.forEach((color) => {
  color.onclick = () => {
    document.documentElement.style.setProperty(
      "--main-color",
      `${color.dataset.newcolor}`
    );
    colorOptions.classList.toggle("active");
    for (let c of colors) {
      c.classList.remove("active");
    }
    color.classList.add("active");
  };
});
