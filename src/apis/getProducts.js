import axios from "../utils/axiosMock";

export async function getProducts() {
  return await axios.get('/products').then(res => res.data)
}