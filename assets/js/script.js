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


//Criando função que liga o click no menu ao respectivo conteúdo.

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Quando o usuário clica no botão, role até o topo da página
function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores da web Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
