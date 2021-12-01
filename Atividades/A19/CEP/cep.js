const inputCEP = document.querySelector('[name="cep"]')
const inputSteet = document.querySelector('[name="street"]')
const inputDistrict = document.querySelector('[name="district"]')
const inputCity = document.querySelector('[name="city"]')
const inputUF = document.querySelector('[name="uf"]')
const inputDDD = document.querySelector('[name="ddd"]')

inputCEP.addEventListener('blur', event => {
  let cep = inputCEP.value
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resp => resp.json())
    .then(dadosCEP => {
        console.log(dadosCEP)
        if(dadosCEP.logradouro && dadosCEP.bairro && dadosCEP.localidade && dadosCEP.uf && dadosCEP.ddd) {
            inputCEP.value = dadosCEP.cep
            inputSteet.value = dadosCEP.logradouro
            inputDistrict.value = dadosCEP.bairro
            inputCity.value = dadosCEP.localidade
            inputUF.value = dadosCEP.uf
            inputDDD.value = dadosCEP.ddd
        }
        else {
            inputCEP.value = "Inválido!"
            inputSteet.value = "Inválido!"
            inputDistrict.value = "Inválido!"
            inputCity.value = "Inválido!"
            inputUF.value = "Inválido!"
            inputDDD.value = "Inválido!"
        }
    })
    .catch(error => {
        inputCEP.value = "Inválido!"
        inputSteet.value = "Inválido!"
        inputDistrict.value = "Inválido!"
        inputCity.value = "Inválido!"
        inputUF.value = "Inválido!"
        inputDDD.value = "Inválido!"
    })
})

const masks = {
    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    },
}




