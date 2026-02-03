const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const song = document.getElementById("song");

// YES CLICK
yesBtn.addEventListener("click", () => {
  song.play();

  document.querySelector(".buttons").style.display = "none";

  message.innerHTML = `
    <h2>Devu will forever be Tanu’s Valentine 💖</h2>
    <p>I love you Dev 🥺💞</p>
    <p>kuchu-tutu forever 🧸✨</p>
  `;
  message.style.display = "block";

  createHearts();
  document.querySelector(".teddy").style.display = "block";
});

// NO HOVER = RUN AWAY
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
});

// NO CLICK = HOW DARE YOU 😤
noBtn.addEventListener("click", () => {
  message.innerHTML = `<h2 class="angry">HOW DARE YOU 😤💔</h2>`;
  message.style.display = "block";
});

// HEARTS
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
