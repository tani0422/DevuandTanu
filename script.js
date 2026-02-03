window.onload = () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const message = document.getElementById("message");
  const song = document.getElementById("song");

  // Hide message initially
  message.style.display = "none";

  yesBtn.addEventListener("click", () => {
    // Show love text
    message.style.display = "block";

    // Play music
    song.volume = 0.6;
    song.play();

    // Start hearts
    startHearts();

    // Soft background change
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
};

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 500);
}
