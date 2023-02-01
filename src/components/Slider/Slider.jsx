import React, {useState} from 'react';
import styles from "./styles.module.scss"

const Slider = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
      <div className={styles.slider}>
        <div className={styles.activeImage}>
          <img src={images.at(currentImage)} alt=""/>
        </div>
        <div className={styles.imagesList}>
          {images.map((image, i) => (
              <img key={i} src={image} alt="" onClick={() => setCurrentImage(i)}/>
          ))}
        </div>
      </div>
  );
};

export default Slider;