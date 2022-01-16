const modal = () => {
    const modal = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const buttonCall = document.querySelectorAll('.callback-btn')
    const modalClose = document.querySelector('.modal-close')
    console.log(buttonCall);

    buttonCall.forEach(elem => {
        elem.addEventListener('click', ()=> {
            modal.style.display = 'block'
            modalOverlay.style.display = 'block'
        })
    })

    const modalNone = function() {
        modal.style.display = 'none'
        modalOverlay.style.display = 'none'
    }

    modalClose.addEventListener('click', modalNone) 

    modalOverlay.addEventListener('click', modalNone)



}

export default modal;