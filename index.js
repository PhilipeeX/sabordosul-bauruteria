const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')
const cardapio = document.querySelector('.menu-lateral__link--cardapio')
const menuCardapio = document.querySelector('.menu-lateral__link--cardapio')
const promocoes = document.querySelector('.menu-lateral__link--promocoes')
const menuPromocoes = document.querySelector('.menu-lateral__link--promocoes')


botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

cardapio.addEventListener('click', () => {
    menuCardapio.classList.toggle('menu-lateral__link--ativo')
})

promocoes.addEventListener('click', () => {
    menuPromocoes.classList.toggle('menu-lateral__link--ativo')
})

