import { useSignals } from '@preact/signals-react/runtime';
import ProductItem from './ProductItem';

export default function ProductList({ products, onDelete }) {
  useSignals(); // make sure signals reactivity is enabled in this component
  
  if (!products.value.length) {
    return <p>No products yet</p>;
  }

  return (
    <ul>
      {products.value.map(product => (
        <ProductItem
          key={product.uuid}
          product={product}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
