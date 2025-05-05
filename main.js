const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

const targetDate = new Date("2025-05-10T19:00:00");

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
  window.open("https://www.google.com/maps/place/City+21+Pan+Asian+Restaurant+%26+Lounge/@41.314077,69.248801,15z/data=!4m6!3m5!1s0x38ae8be8cf4f7725:0x42ee6fb448bb46e3!8m2!3d41.314077!4d69.2488005!16s%2Fg%2F11pb76xfc2?hl=uz&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" , "_blank");
};
  
window.addEventListener("scroll", reveal);
