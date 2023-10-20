const convertButton = document.querySelector('.convert-button')
const segundoSelect = document.querySelector('.segundo-select')
const primeiroSelect = document.querySelector('.primeiro-select')


function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value
  const currencyValueToConvert = document.querySelector(
    '.currency-value-to-convert',
  ) // Valor em Real
  const currencyValueConverted = document.querySelector('.currency-value') // Outras moedas

  const dolarToday = 5.2
  

    


    switch (primeiroSelect.value && segundoSelect.value) {

      case 'dolar' && 'real':

      currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * 4.78)
        
        break;

        case 'real' && 'dolar':

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday)
        break;
    
      default:
        break;
    }


  function formatCurrency() {
  if (primeiroSelect.value == 'dolar') {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(inputCurrencyValue)
  } else if (primeiroSelect.value == 'real'){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue)
  }
}
 formatCurrency()
}



function changeCurrency() {
  const nomeMoeda2 = document.getElementById('nome-moeda-select-2')
  const nomeMoeda1 = document.getElementById('nome-moeda-select-1')
  const currencyImage = document.querySelector('.currency-img')
  const imagemPrimeiroSelect = document.querySelector('.imagem-primeiro-select')
  console.log(nomeMoeda1.value)
  

  if (segundoSelect.value == 'real') {
    nomeMoeda2.innerHTML = 'Real Brasileiro'
    currencyImage.src = './assets/real.png'
  }

  if (primeiroSelect.value == 'real') {
    nomeMoeda1.innerHTML = 'Real Brasileiro'
    imagemPrimeiroSelect.src = './assets/real.png'
  }

  if (segundoSelect.value == 'dolar') {
    nomeMoeda2.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/dolar.png'
  }

  if (primeiroSelect.value == 'dolar') {
    nomeMoeda1.innerHTML = 'Dólar americano'
    imagemPrimeiroSelect.src = './assets/dolar.png'
  }

  convertValues()
}
primeiroSelect.addEventListener('change', changeCurrency)
segundoSelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)
