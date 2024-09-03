gsap.registerPlugin(ScrollTrigger);

function moveahead() {
  const scrollContainer = document.querySelector(".cards-container");
  scrollContainer.scrollBy({ left: 1000, behavior: "smooth" }); // Scroll forward by 200px
}

function moveback() {
  const scrollContainer = document.querySelector(".cards-container");
  scrollContainer.scrollBy({ left: -500, behavior: "smooth" }); // Scroll backward by 200px
}
document
  .querySelector(".menu-toggle-btn")
  .addEventListener("click", function () {
    this.classList.toggle("open");
  });

function shownav() {
  const logoElement = document.querySelector(".logo");
  logoElement.classList.toggle("hidden");
  document.querySelector(".navigation").classList.toggle("block");
}

gsap.from(".hero-text h1", {
  y: -50,
  opacity: 0,
  stagger: 0.2,
});
gsap.from(".hero-text p", {
  opacity: 0,
  y: -30,
  delay: 0.3,
});

function mousemovement() {
  document
    .querySelector("#herosection")
    .addEventListener("mousemove", function (event) {
      gsap.to(".circle", {
        y: event.clientY - 15,
        opacity: 1,
        x: event.clientX - 5,
      });
    });

  document
    .querySelector("#herosection")
    .addEventListener("mouseleave", function () {
      gsap.to(".circle", {
        scale: 0,
        opacity: 0,
      });
    });

  document
    .querySelector("#herosection")
    .addEventListener("mouseenter", function () {
      gsap.to(".circle", {
        scale: 1,
        opacity: 1,
      });
    });
}
mousemovement();

gsap.from(".quotes h1", {
  scrollTrigger: {
    trigger: ".quotes h1",
    start: "top bottom",
    toggleActions: "restart pause reverse none",
  },
  y: 50,
  duration: 1,
  opacity: 0,
});

gsap.from(".quotes p", {
  scrollTrigger: {
    trigger: ".quotes p",
    start: "top bottom",
    toggleActions: "restart pause reverse none",
  },
  y: 30,
  delay: 0.8,
  duration: 0.5,
  opacity: 0,
});
