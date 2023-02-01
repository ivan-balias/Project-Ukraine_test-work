import {axiosMockAdapterInstance} from "../utils/axiosMock";

const sizes = [
  {id: 1, label: 'XS', number: 44},
  {id: 2, label: 'S', number: 46},
  {id: 3, label: 'M', number: 48},
  {id: 4, label: 'L', number: 50},
  {id: 5, label: 'XL', number: 52},
]

axiosMockAdapterInstance.onGet('/sizes').reply(200, {
  sizes: sizes
})