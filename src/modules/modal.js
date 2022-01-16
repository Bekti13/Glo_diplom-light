const modal = () => {
    const modal = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const buttonCall = document.querySelectorAll('.callback-btn')
    const modalClose = document.querySelector('.modal-close')
    const buttonServices = document.querySelector('.button-services')
    const hoverButton = document.querySelectorAll('.fancyboxModal')

    const modalOpen = function() {
        modal.style.display = 'block'
            modalOverlay.style.display = 'block'
    }

    const modalNone = function() {
        modal.style.display = 'none'
        modalOverlay.style.display = 'none'
    }

    buttonCall.forEach(elem => {
        elem.addEventListener('click', modalOpen)
    })

    buttonServices.addEventListener('click', modalOpen)
    hoverButton.forEach(elem => {
        elem.addEventListener('click', modalOpen)
    })
    modalClose.addEventListener('click', modalNone)     
    modalOverlay.addEventListener('click', modalNone)



}

export default modal;