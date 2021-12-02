export const overlay = () => {

    const overlay = document.getElementById('overlay');

    window.addEventListener("scroll", () => {

        let winScroll = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
      
        document.getElementById("progressBar").style.width = scrolled + "%";
    });     
}