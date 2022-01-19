const sendForm = ({formId}) => {
    const form = document.querySelector(formId)    // форма для отправки данных
    const statusBlock = document.createElement('div')
    const loadText = 'Идет отправка..'
    const errorText = 'Ошибка...'
    const successText = 'Данные отправлены!'

    let regTel = /[^0-9\+]/g;
    let regName = /[^А-Яа-я\s]/g;

    const validate = (list) => {

        let success = true

        list.forEach(input => {
            
            if(input.value === '') {
                success = false;
            }
            
            switch(true) {
                case (input.name === "tel"): 
                    if (regTel.test(input.value)) {
                        success = false;
                        input.classList.add('error')
                    } else if (input.value.length < 6) {
                        success = false;
                        input.classList.add('error')
                    } else if (input.value.length > 17) {
                        success = false;
                        input.classList.add('error')
                    } 
                    input.addEventListener('input',()=> {
                        if (input.value.length > 6) {
                            input.classList.remove('error')
                        } else if (input.value.length < 6) {
                            input.classList.add('error')
                        }
                    })

                    
                break;
                case(input.name === "fio"):
                    if (regName.test(input.value)) {
                        success = false;
                        input.classList.add('error')
                    } else if (input.value.length < 2) {
                        success = false
                        input.classList.add('error')
                    } 
                    input.addEventListener('input',()=> {
                        if (input.value.length > 2) {
                            input.classList.remove('error')
                        }  else if (input.value.length < 2) {
                            input.classList.add('error')
                        }
                    })
                break;
            }
            
        })  
        
        return success;
    }
    
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {

            formBody[key] = val
        })

   

    if (validate(formElements)) {
        sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText
                statusBlock.style.color = "red"

                formElements.forEach(input => {
                    if(input.type !== 'submit') 
                        input.value = '';
                    
                })
                setTimeout(function(){
                    statusBlock.textContent = '';
                    statusBlock.style.color = "black";
                }, 2000)
            })
            .catch(error => {
                statusBlock.textContent = errorText
                
            })
    } else {
        
        formElements.forEach(input => {
            
            statusBlock.textContent = ''
            
        })  
    }
}

    try {
        if(!form) {
            throw new Error('В форме критическая ошибка!')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            
            submitForm()
        })


    } catch(error) {
        console.log(error.message);
        }
}

export default sendForm