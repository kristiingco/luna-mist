import { useContext } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";

import { ProductContext } from "../../context/ProductContext";

import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
