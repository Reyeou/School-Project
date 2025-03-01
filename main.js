document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("next-page").addEventListener("click", () => window.location.href = "water.html");
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("next-page2").addEventListener("click", () => window.location.href = "solar.html");
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("next-page3").addEventListener("click", () => window.location.href = "wind.html");
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("next-page4").addEventListener("click", () => window.location.href = "green.html");
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("next-page5").addEventListener("click", () => window.location.href = "about.html");
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("next-page6").addEventListener("click", () => window.location.href = "home.html");
});

document.getElementById('prev-page').onclick = function() {history.back();};
