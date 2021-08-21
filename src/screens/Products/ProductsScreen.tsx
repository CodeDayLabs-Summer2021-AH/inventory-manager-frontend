import "./ProductsScreen.css";
import { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import UserOptions from "./components/UserOptions/UserOptions";
import ProductsTable from "./components/ProductsTable/ProductsTable";
import { LocationProducts } from "../../types/Product";

interface ProductsScreenProps {
  showSidebar: boolean;
}

const ProductsScreen: React.FC<ProductsScreenProps> = ({ showSidebar }) => {
  const [locationProducts, setLocationProducts] =
    useState<LocationProducts | null>(null);
  const [locationId, setlocationId] = useState(1);

  useEffect(() => {
    const getTasks = () => {
      fetchLocationProducts(locationId);
    };

    getTasks();
  }, []);

  // Fetch a location's products
  const fetchLocationProducts = (locationId: Number) => {
    fetch("http://localhost:5000/api/v1/product?id=" + locationId)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
      })
      .then((data) => setLocationProducts(data))
      .catch((error) => console.error(error));
  };
  console.log(locationProducts);
  return (
    <Main showSidebar={showSidebar}>
      <div>
        <UserOptions setlocationId={setlocationId} />
        <ProductsTable locationProducts={locationProducts} />
      </div>
    </Main>
  );
};

export default ProductsScreen;