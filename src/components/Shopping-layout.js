import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product-card';

const ShoppingLayoutComponent = () => {

  const globalState = useSelector(state => state);
  const displayProductList = globalState.ShopNav.displayProducts;

  // Pass Product ProductId={individProd.id} into OverlayCard
  return (
    <>
      {displayProductList.map((individProd) => {
        return (
          <Product
            title={individProd.title}
            image={individProd.image}
            price={individProd.price}
            briefDescription={individProd.briefDescription}
            obj={individProd}
            key={individProd.id}
          />
        )
      })
      }
    </>
  );
};

export default ShoppingLayoutComponent;