import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {

  const cartBtn = document.getElementById('cart')
  const modalCart = document.querySelector('.cart')
  const modalClose = modalCart.querySelector('.cart-close')
  const goodsWrapper = document.querySelector('.goods')
  const cartTotal = modalCart.querySelector('.cart-total > span')
  const cartWrapper = document.querySelector('.cart-wrapper')
  const cartSendBtn = modalCart.querySelector('.cart-confirm')
  const cartCounter = document.querySelector('.counter')


  const cartCount = () => {
    const goodsCount = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : []

    cartCounter.textContent = goodsCount
  }

  cartCount()

  const openCart = () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    modalCart.style.display = 'flex'
    renderCart(cart)

    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price
    }, 0)

  }

  const closeCart = () => {
    modalCart.style.display = ''
  }

  cartBtn.addEventListener('click', openCart)
  modalClose.addEventListener('click', closeCart)

  goodsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const card = event.target.closest('.card')
      const key = card.dataset.key
      const goods = JSON.parse(localStorage.getItem('goods'))
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

      const goodItem = goods.find((item) => {
        return item.id === +key
      })
      cart.push(goodItem)
      localStorage.setItem('cart', JSON.stringify(cart))

      const goodsCount = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : []

      cartCounter.textContent = goodsCount
    }
  })


  cartWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
      const card = event.target.closest('.card')
      const key = card.dataset.key
      const index = cart.findIndex((item) => {
        return item.id === +key
      })

      cart.splice(index, 1)

      localStorage.setItem('cart', JSON.stringify(cart))
      const goodsCount = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : []

      renderCart(cart)

      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price
      }, 0)

      cartCounter.textContent = goodsCount
    }
  })

  cartSendBtn.addEventListener('click', () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

    postData(cart).then(() => {
      localStorage.removeItem('cart')
      renderCart([])
      cartTotal.textContent = 0
    })
  })



}

export default cart