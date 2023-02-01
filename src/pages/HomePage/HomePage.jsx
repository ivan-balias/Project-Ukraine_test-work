import React from 'react';
import ProductList from "../../components/ProductList";
import {useLoaderData} from "react-router-dom";
import Layout from "../../components/Layout";


const HomePage = () => {
  const {products, sizes} = useLoaderData()

  return (
      <Layout>
        <ProductList products={products} sizes={sizes}/>
      </Layout>
  );
};

export default HomePage;