const cart = () => {

  const cartBtn = document.getElementById('cart')
  const modalCart = document.querySelector('.cart')
  const modalClose = modalCart.querySelector('.cart-close')

  const openCart = () => {
    modalCart.style.display = 'flex'
  }
  const closeCart = () => {
    modalCart.style.display = ''
  }

  cartBtn.addEventListener('click', openCart)
  modalClose.addEventListener('click', closeCart)
}

export default cart