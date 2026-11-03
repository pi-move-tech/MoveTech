// Abre e fecha o menu no celular
const header = document.querySelector('.move-header')
const botaoMenu = document.querySelector('.move-header__toggle')

if (botaoMenu != null) {
    botaoMenu.addEventListener('click', () => {
        const aberto = header.classList.toggle('move-header--aberto')
        botaoMenu.setAttribute('aria-expanded', aberto)
    })
    // Fecha o menu quando clica em um link
    document.querySelectorAll('.move-nav a').forEach((link) => {
        link.addEventListener('click', () => {
            header.classList.remove('move-header--aberto')
            botaoMenu.setAttribute('aria-expanded', false)
        })
    })
}
