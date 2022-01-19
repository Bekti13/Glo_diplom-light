const header = () => {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', (e) => {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    const up = document.querySelector('.up')

    window.addEventListener('scroll', ()=> {
        if(pageYOffset > 560) {
            up.style.display = 'block'
        } else {
            up.style.display = 'none'
        }
    })

    up.addEventListener('click', ()=> {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

export default header