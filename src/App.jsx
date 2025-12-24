import { useSignal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import ProductList from './components/ProductList';

export default function App() {
  useSignals(); // make sure signals reactivity is enabled in this component

  // that's how we initialize a signal array
  const products = useSignal([
    { uuid: '6be87db8-8120-4538-b5c5-9a21d24c99e4', name: 'Pen' },
    { uuid: '5e43f34c-6282-4909-ad44-142ba829fe48', name: 'Pencil' },
  ]);

  const addProduct = () => {
    const name = prompt('Product name');

    if (!name) return;

    // that's how we update signal array
    products.value = [...products.value, { uuid: crypto.randomUUID(), name }];

    console.log(products.value);
  };

  // that's how we delete items from a signal array
  const deleteProduct = (uuid) => {
    products.value = products.value.filter(p => p.uuid !== uuid);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Products (Signals)</h1>

      <button onClick={addProduct}>Add product</button>

      <ProductList
        products={products}
        onDelete={deleteProduct}
      />
    </div>
  );
}
