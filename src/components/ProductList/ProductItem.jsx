export default function ProductItem({ product, onDelete }) {
  return (
    <li>
      <h3>{product.name}</h3>

      <button
        onClick={() => onDelete(product.uuid)}
        style={{ marginLeft: 10 }}
      >
        Delete
      </button>

    </li>
  );
}
