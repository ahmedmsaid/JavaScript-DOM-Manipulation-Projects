const btn = document.getElementById('btn');
const modal = document.getElementById('modal');
const close = document.getElementsByClassName('close')[0];

btn.addEventListener('click', () => {
    modal.style.display = "flex";
})

close.addEventListener('click', () => {
    modal.style.display = "none";
})