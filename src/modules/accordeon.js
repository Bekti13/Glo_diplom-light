const accordeon = () => {
    const accordeon = document.querySelector('.accordeon')
    const accordElem = accordeon.querySelectorAll('.element')
    const accordText = accordeon.querySelectorAll('.element-content')

    accordeon.addEventListener('click',(e)=>{
        if (e.target.closest('.element')) {
            let FaqBtn = e.target.closest('.element')
            accordElem.forEach((faq, index)=> {
                if(faq === FaqBtn) {
                    faq.classList.add('active')
                    accordText[index].style.display = 'block'
                } else {
                    faq.classList.remove('active')
                    accordText[index].style.display = 'none'
                }
            })
        }
    })
}

export default accordeon