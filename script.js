const openCard = document.getElementById('opCard');
const card = document.querySelector('.card-quotes');
openCard.addEventListener("click", () => {
    card.style.display = "flex";
    card.classList.add("slideUp")
});
card.addEventListener("click", () => {
    card.classList.remove("slideUp")
    card.style.transform = "translateY(100%)";
    // card.style.display = "none";
})