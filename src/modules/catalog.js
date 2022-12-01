import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filters";

const catalog = () => {
  const catalogBtn = document.querySelector('.catalog-button > button')
  const modalCatalog = document.querySelector('.catalog')
  const modalCatalogItems = document.querySelectorAll('.catalog li')

  let isOpen = false

  catalogBtn.addEventListener('click', () => {
    isOpen = !isOpen

    if (isOpen) {
      modalCatalog.style.display = 'block'
    } else {
      modalCatalog.style.display = ''
    }
  })

  modalCatalogItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent
      getData().then((data) => {
        renderGoods(categoryFilter(data, text))
      })
    })
  })
}

export default catalog