let menu = document.querySelector('.menu-opener')
menu.addEventListener('click', abrirMenu)
let nav = document.querySelector('.menu nav')

function abrirMenu() {
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 800) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});


function changeSlide(slideNumber) {
    // Remove a classe "active" de todos os pointers
    let pointers = document.querySelectorAll('.pointer');
    pointers.forEach(pointer => {
        pointer.classList.remove('active');
    });

    // Adiciona a classe "active" ao pointer clicado
    pointers[slideNumber - 1].classList.add('active');

    // Calcula a posição do slide
    let sliders = document.querySelector('.sliders');
    let slideWidth = sliders.offsetWidth / 3;
    let newPosition = -((slideNumber - 1) * slideWidth);

    // Atualiza a posição do slide
    sliders.style.transform = `translateX(${newPosition}px)`;
}