const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

// Passos necessários para o intercâmbio
let clickCheck1 = document.getElementById("passo1");
let clickCheck2 = document.getElementById("passo2");
let clickCheck3 = document.getElementById("passo3");
let opcao1 = document.querySelector(".opcao1");
let opcao2 = document.querySelector(".opcao2");
let opcao3 = document.querySelector(".opcao3");

let estado1 = false;
clickCheck1.onclick = () => {
  switch (estado1) {
    case true:
      clickCheck1.classList.remove("teste-cor");
      clickCheck2.classList.remove("teste-cor");
      clickCheck3.classList.remove("teste-cor");

      opcao2.classList.add("nao-selecionado");
      opcao3.classList.add("nao-selecionado");
      estado1 = false;
      break;

    case false:
      clickCheck1.classList.add("teste-cor");
      opcao2.classList.remove("nao-selecionado");
      estado1 = true;
      break;
  }
};

let estado2 = false;
clickCheck2.onclick = () => {
  switch (estado2) {
    case true:
      clickCheck2.classList.remove("teste-cor");
      clickCheck3.classList.remove("teste-cor");
      opcao3.classList.add("nao-selecionado");
      estado2 = false;
      break;

    case false:
      opcao3.classList.remove("nao-selecionado");
      clickCheck2.classList.add("teste-cor");
      estado2 = true;
      break;
  }
};

let estado3 = false;
clickCheck3.onclick = () => {
  switch (estado3) {
    case true:
      clickCheck3.classList.remove("teste-cor");
      estado3 = false;
      break;

    case false:
      clickCheck3.classList.add("teste-cor");
      estado3 = true;
      break;
  }
};

//MAPA
let est1 = false;
let clickMapa1 = document.getElementById("btn-mapa-1");

clickMapa1.onclick = () => {
  let mapa1 = document.getElementById("mapouter1");
  switch (est1) {
    case true:
      mapa1.style.display = "none";
      est1 = false;
      break;

    case false:
      mapa1.style.display = "block";
      est1 = true;
      break;
  }
};

let est2 = false;
let clickMapa2 = document.getElementById("btn-mapa-2");

clickMapa2.onclick = () => {
  let mapa2 = document.getElementById("mapouter2");
  switch (est2) {
    case true:
      mapa2.style.display = "none";
      est2 = false;
      break;

    case false:
      mapa2.style.display = "block";
      est2 = true;
      break;
  }
};

let est3 = false;
let clickMapa3 = document.getElementById("btn-mapa-3");

clickMapa3.onclick = () => {
  let mapa3 = document.getElementById("mapouter3");
  switch (est3) {
    case true:
      mapa3.style.display = "none";
      est3 = false;
      break;

    case false:
      mapa3.style.display = "block";
      est3 = true;
      break;
  }
};

//Slide 768
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
