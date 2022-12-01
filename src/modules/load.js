import getData from "./getData";
import renderGoods from "./renderGoods";

const load = () => {
  getData().then((data) => { //преобразование промиса в массив объектов
    renderGoods(data) //отрисовка массива объектов
  });
}

export default load