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

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.coinranking.com/v1/public/coin/1', true)
request.onload = function() {
  // Begin accessing JSON data here
  var json = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
	  const card = document.createElement('div')
	  card.setAttribute('class', 'card')

	  const h1 = document.createElement('h1')
	  h1.textContent = json.data.coin.name

	  const h2 = document.createElement('h2')
	  json.data.coin.price = json.data.coin.price.substring(0, 8)
	  h2.textContent = `${json.data.coin.price} USD`

	  container.appendChild(card)
	  card.appendChild(h1)
	  card.appendChild(h2)
  } else {
    const errorMessage = document.createElement('Error')
    errorMessage.textContent = `API request is not working!`
    app.appendChild(errorMessage)
  }
}

request.send()