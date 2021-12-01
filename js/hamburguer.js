const hamburguerButton = document.getElementById('hamburguer__button');
export const hamburguerButton = () => {

    hamburguerButton.addEventListener('click', () =>  {

        hamburguerButton.classList.toggle('--active');
        desplegable.classList.toggle('--active');
        overlay.classList.toggle('--active');
    });  
}