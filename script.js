const wrapper = document.querySelector(".wrapper")
const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yes-btn = document.querySelector(".yes-btn")
const no-btn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, I like you too";
  gif.src =
  
"https://raw.githubusercontent.com/DzarelDeveloper/Ing /main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnReact = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth noBtnRect.width; 
  const maxY = window.innerHeight - noBtnRect.height;
  
  const randomX = Math.floor(Math.random() 
  const randomY Math.floor(Math.random() maxX); maxY);
  
  noBtn.style.left = randomX + "px"; 
  noBtn.style.top = randomY + "py";
});