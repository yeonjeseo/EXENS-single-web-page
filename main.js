"use strict";
/************* SHOW MENU *************/
const showMenu = () => {
  const toggle = document.getElementById("nav-toggle"),
    nav = document.getElementById("nav-menu");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
      console.log("toggle");
    });
  }
};
showMenu();

/************* SLIDE SHOW *************/
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}

/*================== Scroll Reveal Animation ==================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(`.data__item`, {
  interval: 200,
});

/*================== Email ==================*/
(function () {
  emailjs.init("user_lIEcZi4awRHqgiziPAV3Z");
})();

const btnSend = document.getElementById("btnSend");
btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  let templateParams = {
    toName: document.getElementById("firstName").value,
    fromName: document.getElementById("lastName").value,
    replyTo: document.getElementById("email").value,
    message: document.getElementById("messageBox").value,
  };
  console.log(templateParams);
  sendEmail(templateParams);
});

function sendEmail(templateParams) {
  emailjs.send("service_tui1gcl", "template_p1fingl", templateParams).then(
    function (response) {
      alert("메일을 성공적으로 보냈습니다.");
      console.log("SUCCESS!", response.status, response.text);
      location.reload();
    },
    function (error) {
      alert("시스템 점검 중입니다.");
      console.log("FAILED...", error);
    }
  );
}

const mainImg = document.querySelector(".main__image");
