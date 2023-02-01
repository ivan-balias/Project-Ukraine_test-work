import {axiosMockAdapterInstance} from "../utils/axiosMock"

const products = [
  {
    id: 1,
    name: 'Футболка',
    colors: [
      {
        id: 1,
        name: 'черный',
        images: ['/images/1/black_front.png', '/images/1/black_back.png'],
        price: '123.00',
        description: 'Описание для "Футболка черный"',
        sizes: [1, 2, 3],
      },
      {
        id: 2,
        name: 'белый',
        images: ['/images/1/white_front.png', '/images/1/white_back.png'],
        price: '125.00',
        description: 'Описание для "Футболка белый"',
        sizes: [1, 2, 3, 4, 5],
      },
      {
        id: 3,
        name: 'серый',
        images: ['/images/1/gray_front.png', '/images/1/gray_back.png'],
        price: '120.00',
        description: 'Описание для "Футболка серый"',
        sizes: [],
      },
    ],
  },

  {
    id: 2,
    name: 'Майка',
    colors: [
      {
        id: 1,
        name: 'желтый',
        images: ['/images/2/yellow_front.png', '/images/2/yellow_back.png'],
        price: '88.00',
        description: 'Описание для "Майка желтый"',
        sizes: [1, 2, 3, 4, 5],
      },
      {
        id: 2,
        name: 'синий',
        images: ['/images/2/blue_front.png', '/images/2/blue_back.png'],
        price: '89.00',
        description: 'Описание для "Майка синий"',
        sizes: [2],
      },
      {
        id: 3,
        name: 'черный',
        images: ['/images/2/black_front.png', '/images/2/black_back.png'],
        price: '90.00',
        description: 'Описание для "Майка черный"',
        sizes: [],
      },
    ],
  },
]

axiosMockAdapterInstance.onGet('/products').reply(200, {
  products: products
})

axiosMockAdapterInstance.onGet('/product_info').reply(({params}) => {
  const product = products.find((product) => product.id === +params?.productId)
  if (product) {
    return [200, {product}]
  } else {
    return [400]
  }
})