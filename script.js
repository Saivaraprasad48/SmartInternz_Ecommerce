const runningBtn = document.getElementById("runningBtn");
const sportBtn = document.getElementById("sportBtn");
const apparelBtn = document.getElementById("apparelBtn");
const performanceBtn = document.getElementById("performanceBtn");
const cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", function () {
  window.location.href = "cart.html";
});

sportBtn.addEventListener("click", function () {
  window.location.href = "sports.html";
});

apparelBtn.addEventListener("click", function () {
  window.location.href = "apparel.html";
});

performanceBtn.addEventListener("click", function () {
  window.location.href = "performance.html";
});

document.getElementById("mensBtn").addEventListener("click", function () {
  window.location.href = "mens.html";
});

runningBtn.addEventListener("click", function () {
  window.location.href = "running.html";
});

document.getElementById("womensBtn").addEventListener("click", function () {
  window.location.href = "womens.html";
});

document.getElementById("kidsBtn").addEventListener("click", function () {
  window.location.href = "kids.html";
});
