const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const song = document.getElementById("song");

// Hide message initially
message.style.display = "none";

// YES button click
yesBtn.addEventListener("click", () => {
  // Show text
  message.style.display = "block";

  // Play music
  song.volume = 0.6;
  song.play();

  // Start hearts
  startHearts();

  // Change background
  document.body.style.background = "#ffe0ec";
});

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Hearts function
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 500);
}
