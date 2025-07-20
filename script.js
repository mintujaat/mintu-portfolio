// Typing Effect
const typingElement = document.querySelector(".typing-text");
const textArray = ["Web Developer", "App Developer", "Digital Creator"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000);
});

// Print Resume
function printResume() {
  window.print();
}

// Dark Mode Toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
});

// Language Switcher
const langSelect = document.getElementById("language");
langSelect.addEventListener("change", () => {
  const lang = langSelect.value;
  if (lang === "hi") {
    document.getElementById("heading").textContent = "नमस्ते, मैं मिंटू कुमार हूँ";
    document.getElementById("role").innerHTML = "वेब डेवलपर | ऐप डेवलपर | डिजिटल क्रिएटर";
    document.getElementById("printBtn").textContent = "प्रिंट रिज़्यूमे";
    document.getElementById("skillsText").textContent = "कौशल";
  } else {
    document.getElementById("heading").textContent = "Hello, I'm Mintu Kumar";
    document.getElementById("role").innerHTML = "Web Developer | App Developer | Digital Creator";
    document.getElementById("printBtn").textContent = "Print Resume";
    document.getElementById("skillsText").textContent = "Skills";
  }
});

// Animate Skill Bars on Scroll
window.addEventListener("scroll", () => {
  const skills = document.querySelectorAll(".skill-bar-fill");
  skills.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});
var typed = new Typed("#typed", {
  strings: ["Web Developer", "App Developer", "YouTuber", "Tech Creator"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true
});