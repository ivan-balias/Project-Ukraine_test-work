import React from 'react';
import styles from './styles.module.scss'
import Product from "../Product";

const ProductList = ({products, sizes}) => {
  return (
      <div className={styles.products}>
        {products.map((product) => (
            <Product key={`${product.id}:${product.colorId}`} product={product} sizes={sizes}/>
        ))}
      </div>
  );
};

export default ProductList;