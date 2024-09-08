import { useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
import {ProductsContext} from '../context/products-context';
import './Products.css';

const Products = props => {
  const productsContext = useContext(ProductsContext);

  return (
    <ul className="products-list">
      {productsContext.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
