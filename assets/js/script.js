let menu = document.querySelector('.menu-opener')
menu.addEventListener('click', abrirMenu)
let nav = document.querySelector('.menu nav')
function abrirMenu() {
    if (window.innerWidth <= 800) {
        if (nav.style.display === 'none') {
            nav.style.display = 'block'
        }
        else {
            nav.style.display = 'none';
        }
    }
}