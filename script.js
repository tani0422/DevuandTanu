const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const song = document.getElementById("song");
const teddy = document.querySelector(".teddy");

let noHoverCount = 0;

// YES CLICK — MAIN MOMENT 💖
yesBtn.addEventListener("click", () => {
  song.play();

  document.querySelector(".buttons").style.display = "none";

  message.innerHTML = `
    <h2>Devu will forever be Tanu’s Valentine 💖</h2>
    <p>I love you Dev 🥺💞</p>
    <p>kuchu-tutu forever 🧸✨</p>
    <p>You’ll always have to be my Valentine — no choice 😌💘</p>
  `;
  message.style.display = "block";

  teddy.style.display = "block";
  createHearts();
});

// NO HOVER — RUN ONLY ONCE 😈
noBtn.addEventListener("mouseover", () => {
  if (noHoverCount < 1) {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 70 + "%";
    noBtn.style.left = Math.random() * 70 + "%";
    noHoverCount++;
  }
});

// NO CLICK — SECOND TIME WORKS
noBtn.addEventListener("click", () => {
  message.innerHTML = `<h2 class="angry">HOW DARE YOU 😤💔</h2>`;
  message.style.display = "block";
});

// HEARTS 💕
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }, 300);
}
