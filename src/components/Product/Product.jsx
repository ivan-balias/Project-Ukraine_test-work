import React from 'react';
import styles from "./styles.module.scss"
import {useNavigate} from "react-router-dom";

const Product = ({product, sizes}) => {
  const navigate = useNavigate();

  return (
      <div className={styles.product}>
        <div className={styles.content} onClick={() => navigate(`product/${product.id}/${product.colorId}`)}>
          <img src={product.images.at(0)} alt=""/>
          <div className={styles.info}>
            <span className={styles.name}>
              {product.name} {product.colorName}
            </span>
            <span className={styles.description}>
              {product?.description}
            </span>
            <div className={styles.sizes}>
              {sizes.map((size, i) => (
                  <span key={size.id}
                        className={`${styles.size} ${product.sizes.includes(size.id) ? styles.active : ''}`}>
                    {size.label}
                  </span>
              ))}
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <span className={styles.price}>{product.price}</span>
          </div>
        </div>
      </div>
  );
};

export default Product;