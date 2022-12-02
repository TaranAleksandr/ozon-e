export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase()) //поиск подстроки в названии товара
  })
}

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value //поиск товара по категориям
  })
}

export const priceFilter = (goods, minPrice, maxPrice) => {
  return goods.filter((goodsItem) => {
    if (minPrice === '' && maxPrice === '') { //фильтр по цене
      return goodsItem
    } else if (minPrice !== '' && maxPrice !== '') {
      return goodsItem.price >= minPrice && goodsItem.price <= maxPrice
    } else if (minPrice !== '' && maxPrice === '') {
      return goodsItem.price >= minPrice
    } else if (minPrice === '' && maxPrice !== '') {
      return goodsItem.price <= maxPrice
    }

  })
}

export const hotSaleFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    if (value) {
      return goodsItem.sale === true
    } else {
      return goodsItem
    }
  })
}