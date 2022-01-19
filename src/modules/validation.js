const validation = () => {
    const formName = document.querySelector('.form-control')
    const formTel = document.querySelector('.form-group > .required')

    formTel.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\+]/gi, "")
    });

    formName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-я]/gi, "")
    });
}

export default validation
