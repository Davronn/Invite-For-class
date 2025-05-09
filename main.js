const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

const targetDate = new Date("2025-05-24T08:00:00");

const images = [
  './Slidephotos/photo_1_2025-05-09_18-52-34.jpg',
  './Slidephotos/photo_2_2025-05-09_18-52-34.jpg',
  './Slidephotos/photo_3_2025-05-09_18-52-34.jpg',
  './Slidephotos/photo_4_2025-05-09_18-52-34.jpg',
  './Slidephotos/photo_5_2025-05-09_18-52-34.jpg',
];

let index = 0;
const slider = document.getElementById('slider');

function changeBackground() {
  slider.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 3000); // 5 sekundda o‘zgaradi


function updateCountdown() {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML = "🎉 Tadbir boshlandi!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days} kun, ${hours} soat, ${minutes} daqiqa, ${seconds} soniya qoldi`;
}

// Har soniyada yangilanadi
const timer = setInterval(updateCountdown, 1000);
updateCountdown();






function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
const handleNavigate = () => {
console.log("43-maktabda")
};
  
window.addEventListener("scroll", reveal);
