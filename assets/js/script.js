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

// Adicione um evento de redimensionamento para garantir que o menu seja exibido ou ocultado corretamente quando a largura da tela mudar.
window.addEventListener('resize', function() {
    if (window.innerWidth > 800) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});
