// $(document).ready(function() {
  
//   $(window).scroll(function () {
//       //if you hard code, then use console
//       //.log to determine when you want the 
//       //nav bar to stick.  
//       console.log($(window).scrollTop())
//     if ($(window).scrollTop() > 280) {
//       $('#main').addClass('navbar-fixed');
//     }
//     if ($(window).scrollTop() < 281) {
//       $('#main').removeClass('navbar-fixed');
//     }
//   });
// });

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("main").style.top = "0";
//   } else {
//     document.getElementById("main").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }



// const app = document.getElementById('root')
// const container = document.createElement('div')
// container.setAttribute('class', 'container')

// app.appendChild(container)

// var request = new XMLHttpRequest()
// request.open('GET', 'https://api.coinranking.com/v1/public/coins?symbols=btc,doge,ltc,eth,bch,xrp,miota,usdt,eos', true)
// request.onload = function() {
//   // Begin accessing JSON data here
//   var json = JSON.parse(this.response)
//   var coins = json.data.coins
//   console.log(coins)
  
//   if (request.status >= 200 && request.status < 400) {
// 	  coins.forEach(coin => {
// 		  const card = document.createElement('div')
// 		  card.setAttribute('class', 'card')

// 		  const h1 = document.createElement('h1')
// 		  h1.textContent = coin.name
		  
// 		  const logo = document.createElement('img')
// 		  logo.src = coin.iconUrl

// 		  const h2 = document.createElement('h2')
// 		  coin.price = coin.price.substring(0, 8)
// 		  h2.textContent = `${coin.price} USD`

// 		  container.appendChild(card)
// 		  card.appendChild(h1)
// 		  card.appendChild(logo)
// 		  card.appendChild(h2)
// 	  })
//   } else {
//     const errorMessage = document.createElement('Error')
//     errorMessage.textContent = `API request is not working!`
//     app.appendChild(errorMessage)
//   }
// }
// request.send()

