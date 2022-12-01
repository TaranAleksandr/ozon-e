const getData = () => {
  return fetch('https://ozon-e-db-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
    .then((response) => {
      return response.json()
    })

}

export default getData