import {getProducts} from "../apis/getProducts";
import {getSizes} from "../apis/getSizes";

const getProductList = async () => {
  const data = await getProducts().then((r) => r.products);
  return data.map(p => {
    let update = [];

    for (let color of p.colors) {
      const d = {
        ...color,
        id: p.id,
        colorId: color.id,
        name: p.name,
        colorName: `${color.name}`
      }
      update.push(d)
    }

    return update;
  }).flat()
}

const getProductsSizes = async () => {
  return await getSizes().then(r => r.sizes);
}

export async function loader({params}) {

  const products = await getProductList();
  const sizes = await getProductsSizes();

  return {
    products,
    sizes
  }
}