// SHOW/HIDE MENU ON MOBILE

let menu_btn = document.querySelector(".navbar-mobile-btn");
let menu = document.querySelector(".navbar-menu");
let list = document.querySelector(".navbar-list");
let items = document.querySelectorAll(".navbar-item");
let socials = document.querySelector(".socials");
let links = document.querySelectorAll(".navbar-link");
let body = document.body;

menu_btn.addEventListener("click", function () {
  menu.classList.toggle("navbar-mobile-menu");
  menu.classList.toggle("collapse");
  list.classList.toggle("navbar-mobile-list");

  items.forEach((element) => {
    element.classList.toggle("navbar-mobile-item");
  });

  socials.classList.toggle("navbar-mobile-socials");
});

list.addEventListener("click", function () {
  if (!menu.classList.contains("collapse")) {
    menu.classList.toggle("navbar-mobile-menu");
    menu.classList.toggle("collapse");
    list.classList.toggle("navbar-mobile-list");

    items.forEach((element) => {
      element.classList.toggle("navbar-mobile-item");
    });

    socials.classList.toggle("navbar-mobile-socials");
  }
});

// SHOW FIXED MENU ONLY IF SCROLL DOWN

let navbar = document.querySelector(".navbar");
let nav_container = document.querySelector(".navbar-container");

document.addEventListener("scroll", function () {
  if (window.innerWidth > 1200) {
    let pixels = 300;
    navbar.classList.toggle("navbar-fixed", window.scrollY > pixels);
    nav_container.classList.toggle("show", window.scrollY > pixels);
  }
});

// SHOW/HIDE TEXT CUM A INCEPUT

let text1 = document.querySelector(".hide-text-inceput");
let hide_text_btn1 = document.querySelector(".show-text-btn-inceput");

hide_text_btn1.addEventListener("click", function () {
  text1.classList.toggle("show-text-inceput");

  let display_text = hide_text_btn1.innerText;
  if (display_text == "Citește mai mult") {
    hide_text_btn1.innerText = "Ascunde";
  } else {
    hide_text_btn1.innerText = "Citește mai mult";
  }
});

// SHOW/HIDE TEXT SCOPUL

let text2 = document.querySelector(".hide-text-scopul");
let hide_text_btn2 = document.querySelector(".show-text-btn-scopul");
let section_scopul = document.querySelector(".scopul");

hide_text_btn2.addEventListener("click", function () {
  text2.classList.toggle("show-text-scopul");
  section_scopul.classList.toggle("extins");

  let display_text = hide_text_btn2.innerText;
  if (display_text == "Citește mai mult") {
    hide_text_btn2.innerText = "Ascunde";
  } else {
    hide_text_btn2.innerText = "Citește mai mult";
  }
});

// GALLERY ANIMATION
let pers_icons = document.querySelectorAll(".pers-btn");
let gallery_imgs = document.querySelectorAll(".change-img");

pers_icons.forEach((element) => {
  element.addEventListener("click", function () {
    pers_icons.forEach((element2) => {
      if (element2.classList.contains("active-pers")) element2.classList.remove("active-pers");
    });
    element.classList.add("active-pers");

    if (element.classList.contains("dragnea")) {
      gallery_imgs.forEach((element2) => {
        element2.src = "stuff/img/hide-pers.svg";
      });
    } else if (element.classList.contains("vadim")) {
      gallery_imgs.forEach((element2) => {
        element2.src = "stuff/img/hide-pers.svg";
      });
    } else if (element.classList.contains("ceausescu")) {
      let i = 1;
      gallery_imgs.forEach((element2) => {
        element2.src = "stuff/img/ceausescu/Ceausescul" + i.toString() + ".png";
        i = i + 1;
      });
    } else if (element.classList.contains("basescu")) {
      gallery_imgs.forEach((element2) => {
        element2.src = "stuff/img/hide-pers.svg";
      });
    } else if (element.classList.contains("iohannis")) {
      gallery_imgs.forEach((element2) => {
        element2.src = "stuff/img/hide-pers.svg";
      });
    }
  });
});

// FAQ SHOW ANSWER

let q_title = document.querySelectorAll(".q-title");

q_title.forEach((question) => {
  question.addEventListener("click", function () {
    question.parentElement.classList.toggle("show-text");
    if (question.parentElement.classList.contains("show-text")) question.firstElementChild.style.transform = "rotate(90deg)";
    else question.firstElementChild.style.transform = "rotate(0deg)";
  });
});

let sections = document.querySelectorAll("section");

// COLOR NAV TEXT WHEN ON SECTION

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((li) => {
    li.classList.remove("active");
    if (li.href.includes(current)) {
      li.classList.add("active");
    }
  });
};

// SLIDER MOBILE GALLERY

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 100,
  responsiveClass: true,
  center: true,
  responsive: {
    0: {
      items: 3,
    },
    700: {
      items: 5,
    },
  },
});

// TOKONOMICS

const ctx = document.getElementById("politikosChart").getContext("2d");
const cty = document.getElementById("scmbChart").getContext("2d");

Chart.defaults.font.family = "Oswald";
Chart.defaults.font.size = 15;
Chart.defaults.color = "#fff";
Chart.defaults.font.weight = 300;

const myChart1 = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Team + advisors/parteneri",
      "Hub",
      "Airdrops Comunitate/Giveaways",
      "Marketing",
      "Parteneriate Strategice",
      "Dezvoltare Școalamaibună.ro",
    ],
    datasets: [
      {
        label: "Procentaj",
        data: [18, 10, 10, 6, 6, 50],
        backgroundColor: ["#BA1B2D", "#E3A443", "#363457", "#93755B", "#387780", "#006BA6"],
        borderWidth: 5,
        borderColor: "#1e1e1e",
        hoverOffset: 6,
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "#1e1e1e",
        anchor: "center",
        align: "end",
        offset: 25,
        font: { family: "Oswald", weight: 600, size: 15 },
        formatter: function (value, context) {
          return value + "%";
        },
      },
    },
  },
});

const myChart2 = new Chart(cty, {
  type: "pie",
  data: {
    labels: ["Producție cursuri", "Achiziții", "Echipă + parteneriate", "Marketing"],
    datasets: [
      {
        label: "Procentaj",
        data: [50, 15, 20, 15],
        backgroundColor: ["#BA1B2D", "#E3A443", "#93755B", "#387780", "#006BA6", "#363457"],
        borderWidth: 5,
        borderColor: "#1e1e1e",
        hoverOffset: 6,
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "#1e1e1e",
        anchor: "center",
        align: "end",
        offset: 25,
        font: { family: "Oswald", weight: 600, size: 15 },
        formatter: function (value, context) {
          return value + "%";
        },
      },
    },
  },
});
