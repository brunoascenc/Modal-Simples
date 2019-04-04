const modalButton  = document.getElementsByClassName('modal-button')
const modalBg = document.querySelector('.modal-bg')
const modalClose = document.querySelector('.fechar-modal')

modalButton[0].onclick = function ()  {
    modalBg.classList.add('modal-ativar');
}

modalClose.addEventListener('click', function () {
    modalBg.classList.remove('modal-ativar')
})



