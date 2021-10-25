const masks = {
    cpf(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },
    rg(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{1})\d+?$/, '$1')
    },
    tel(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

const button = document.getElementById('button')

button.addEventListener('click', (event) =>{
    event.preventDefault()

    let name = document.getElementById('name')
    let tel = document.getElementById('tel')
    let cpf = document.getElementById('cpf')
    let rg = document.getElementById('rg')
    let email = document.getElementById('email')
    let pass = document.getElementById('pass')

    if (name.value == '') {
        name.classList.add("errorInput")
    } else {
        name.classList.remove("errorInput")
    }

    if (tel.value == '' || tel.value.length < 14) {
        tel.classList.add("errorInput")
    } else {
        tel.classList.remove("errorInput")
    }

    if (cpf.value == '' || cpf.value.length < 14) {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    }

    if (rg.value == '' || rg.value.length < 12) {
        rg.classList.add("errorInput")
    } else {
        rg.classList.remove("errorInput")
    }

    if (email.value == '' || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (pass.value == '' || pass.value.length < 6) {
        pass.classList.add("errorInput")
    } else {
        pass.classList.remove("errorInput")
    }
})