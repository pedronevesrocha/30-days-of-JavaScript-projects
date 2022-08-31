var liveprice = {
    async: true,
    scroosDomain: true,
    url:
      'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false',
    method: 'GET',
    headers: {},
  }
  
  $.ajax(liveprice).done(function (response) {
    const name = document.querySelector('.name')
    name.innerHTML = response.id
    const currencytype = document.querySelector('.currency-type')
    const price = document.querySelector('.price')
    const currency = document.querySelector('.currency')
  
    price.innerHTML = response.market_data.current_price.usd + '$'
  
    currencytype.addEventListener('click', (e) => {
      if (currencytype.value == 'inr') {
        price.innerHTML = response.market_data.current_price.inr + '₹'
        currency.innerHTML = 'INR'
      } else if (currencytype.value == 'usd') {
        price.innerHTML = response.market_data.current_price.usd + '$'
        currency.innerHTML = 'USD'
    }
  })

  console.log(response)
})  