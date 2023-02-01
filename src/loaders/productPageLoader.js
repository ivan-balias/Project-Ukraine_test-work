import {getProduct} from "../apis/getProduct";
import {getSizes} from "../apis/getSizes";

export const getProductInfo = async (productId) => {
  return await getProduct(productId).then(r => r.product)
}

const getProductsSizes = async () => {
  return await getSizes().then(r => r.sizes);
}

export async function loader({params}) {

  const product = await getProductInfo(params.productId);
  const sizes = await getProductsSizes();

  return {
    product,
    sizes
  }
}