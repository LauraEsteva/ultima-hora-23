const hamburguerButton = document.getElementById('hamburguer__button');
const desplegable = document.getElementById('desplegable');
const overlay = document.getElementById('overlay');

hamburguerButton.addEventListener('click', () =>  {

    hamburguerButton.classList.toggle('--active');
    desplegable.classList.toggle('--active');
    overlay.classList.toggle('--active');
});

window.addEventListener("scroll", () => {

    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
  
    document.getElementById("progressBar").style.width = scrolled + "%";
});