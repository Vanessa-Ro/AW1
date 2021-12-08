const inputCEP = document.querySelector('[name="cep"]')
const inputSteet = document.querySelector('[name="street"]')
const inputDistrict = document.querySelector('[name="district"]')
const inputCity = document.querySelector('[name="city"]')
const inputUF = document.querySelector('[name="uf"]')
const inputDDD = document.querySelector('[name="ddd"]')

inputCEP.addEventListener('blur', event => {
  axios.get(`https://viacep.com.br/ws/${inputCEP.value}/json/`)
  .then(response => {
      if(response.data.logradouro && response.data.bairro && response.data.localidade && response.data.uf && response.data.ddd) {
          inputCEP.value = response.data.cep
          inputSteet.value = response.data.logradouro
          inputDistrict.value = response.data.bairro
          inputCity.value = response.data.localidade
          inputUF.value = response.data.uf
          inputDDD.value = response.data.ddd
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
});

const masks = {
    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    },
}




