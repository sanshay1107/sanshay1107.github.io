const wrapper = document.querySelector(".wrapper")
const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

const TOKEN = "8653683189:AAE94HrDsXRqMEyfYpQiWKaMV5mP4qp078k";
const CHAT_ID = "8789321322";

function kirimNotif(pesan) {
  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: pesan
    })
  });
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, I like you too";
  gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";
  kirimNotif("💘 Someone clicked YES!");
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  kirimNotif("😅 Someone tried to click NO...");
});