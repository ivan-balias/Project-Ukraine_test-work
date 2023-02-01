import axios from "../utils/axiosMock";

export async function getSizes() {
  return await axios.get('/sizes').then(res => res.data)
}