const getData = (str) => {
  return fetch(`https://ozon-e-db-default-rtdb.europe-west1.firebasedatabase.app/goods.json?${str ? `search=${str}` : ''}`)
    .then((response) => { //ответ сервера
      return response.json() //получение промиса из ответа сервера
    })

}

export default getData