import React, {useState} from 'react';
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import Slider from "../../components/Slider";
import styles from "./styles.module.scss"
import Layout from "../../components/Layout";

const ProductPage = () => {
  const navigate = useNavigate();
  const {product, sizes} = useLoaderData()
  const {productId, colorId} = useParams();

  const currentProductColor = product.colors.at(colorId - 1);

  const [selectedSize, setSelectedSize] = useState();

  return (
      <Layout>
        <div className={styles.wrap}>
          <div className={styles.image}>
            <Slider images={currentProductColor.images}/>
          </div>
          <div className={styles.info}>
            <h2>{product.name} {currentProductColor.name}</h2>
            {selectedSize && <span>Selected size: {selectedSize.label} : {selectedSize.number}</span>}
            <div className={styles.sizes}>
              {sizes.map((size, i) => (
                  <span key={size.id}
                        onClick={() => currentProductColor.sizes.includes(size.id) && setSelectedSize(size)}
                        className={`${styles.size} ${currentProductColor.sizes.includes(size.id) ? styles.active : ''} ${selectedSize?.id === size.id ? styles.selected : ''}`}
                  >
                  {size.label}
                </span>
              ))}
            </div>
            <div>
              <p>{currentProductColor.description}</p>
              <p>{currentProductColor.price}</p>
            </div>
            <div className={styles.colors}>
              {product.colors.map((color, i) => (
                  <button key={color.id} className={`${styles.color} ${+colorId === color.id ? styles.selected : ''}`}
                          onClick={() => navigate(`/product/${productId}/${color.id}`)}
                  >
                    {color.name}
                  </button>
              ))}
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default ProductPage;