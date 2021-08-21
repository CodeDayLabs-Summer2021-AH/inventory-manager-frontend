import { LocationProducts, Product } from "../../../../types/Product";
import "./ProductsTable.css";

interface ProductsTableProps {
  locationProducts: LocationProducts | null;
}

const ProductsTable: React.FC<ProductsTableProps> = ({ locationProducts }) => {
  return (
    <div>
      <table className="products-table">
        <thead className="table-head">
          <tr>
            <th>Image</th>
            <th>SKU</th>
            <th>Name</th>
            <th>Row</th>
            <th>Section</th>
            <th>Quantity On Hand</th>
            <th>Date Received</th>
          </tr>
        </thead>
        <tbody>
          {locationProducts &&
            locationProducts.products.map((product: Product) => (
              <tr key={product.id}>
                <th><img className="product-img" src={product.image}></img></th>
                <th>{product.sku}</th>
                <th>{product.name}</th>
                <th>{product.row}</th>
                <th>{product.section}</th>
                <th>{product.quantityOnHand}</th>
                <th>{product.dateReceived}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
