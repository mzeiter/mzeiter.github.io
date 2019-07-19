/* const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films?limit=6', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send() */


const app = document.getElementById('root')

// const spacer = document.createElement('div')
// spacer.setAttribute('class', 'spacer_coin')


const container = document.createElement('div')
container.setAttribute('class', 'container')

// app.appendChild(spacer)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.coinranking.com/v1/public/coins?symbols=btc,doge,ltc,eth,bch,xrp,miota,usdt,eos', true)
request.onload = function() {
  // Begin accessing JSON data here
  var json = JSON.parse(this.response)
  var coins = json.data.coins
  console.log(coins)
  
  if (request.status >= 200 && request.status < 400) {
	  coins.forEach(coin => {
		  const card = document.createElement('div')
		  card.setAttribute('class', 'card')

		  const h1 = document.createElement('h1')
		  h1.textContent = coin.name
		  
		  const logo = document.createElement('img')
		  logo.src = coin.iconUrl

		  const h2 = document.createElement('h2')
		  coin.price = coin.price.substring(0, 8)
		  h2.textContent = `${coin.price} USD`

		  container.appendChild(card)
		  card.appendChild(h1)
		  card.appendChild(logo)
		  card.appendChild(h2)
	  })
  } else {
    const errorMessage = document.createElement('Error')
    errorMessage.textContent = `API request is not working!`
    app.appendChild(errorMessage)
  }
}
request.send()

