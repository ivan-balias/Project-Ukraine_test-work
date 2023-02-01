import axios from "../utils/axiosMock";

export async function getProduct(id) {
  return await axios.get('/product_info', {
    params: {
      productId: id
    }
  }).then(res => res.data)
}
