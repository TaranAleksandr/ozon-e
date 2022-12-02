import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotSaleFilter } from "./filters";

const price = () => {
  const minPrice = document.getElementById('min')
  const maxPrice = document.getElementById('max')
  const checkBoxInput = document.getElementById('discount-checkbox')
  const checkBoxSpan = document.querySelector('.filter-check_checkmark')

  minPrice.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkBoxInput.checked), minPrice.value, maxPrice.value))
    })
  })

  maxPrice.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkBoxInput.checked), minPrice.value, maxPrice.value))
    })
  })

  checkBoxInput.addEventListener('change', () => {
    if (checkBoxInput.checked) {
      checkBoxSpan.classList.add('checked')
    } else {
      checkBoxSpan.classList.remove('checked')
    }
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkBoxInput.checked), minPrice.value, maxPrice.value))
    })
  })
}

export default price