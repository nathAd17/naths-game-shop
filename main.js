// mulai loader
window.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".load-content");
  loader.style.display = "none";
});

// akhir loader
// mulai dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
// akhir dark mode
// sweet alert 
function sweetAlert() {
  Swal.fire('You Haven\'t Logged in')
}

function seeAll() {
  Swal.fire('Login to see more of our products')
}

// gallery
var openmodal = document.querySelectorAll(".modal-open");
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener("click", function (event) {
    event.preventDefault();
    toggleModal();
  });
}
var closemodal = document.querySelectorAll(".modal-close");
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener("click", toggleModal);
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape && document.body.classList.contains("modal-active")) {
    toggleModal();
  }
};

function toggleModal() {
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal");
  modal.classList.toggle("opacity-0");
  modal.classList.toggle("pointer-events-none");
  body.classList.toggle("modal-active");
}

for (let i = 1; i <= 8; i++) {
  const videoContainer = document.getElementById(`video-container${i}`);
  const video = document.getElementById(`my-video${i}`);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  });

  observer.observe(videoContainer);

  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play();
  });
}

const backToTop = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});