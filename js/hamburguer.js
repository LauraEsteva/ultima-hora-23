export const hamburguerButton = () => {

    const hamburguerButton = document.getElementById('hamburguer__button');

    hamburguerButton.addEventListener('click', () =>  {

        hamburguerButton.classList.toggle('--active');
        desplegable.classList.toggle('--active');
        overlay.classList.toggle('--active');
    });  
}