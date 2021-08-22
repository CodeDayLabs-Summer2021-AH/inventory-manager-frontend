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
  const [locationId, setLocationId] = useState(1);

  const locationOptions = ["Location One", "Location Two", "Location Three"];

  useEffect(() => {
    const getTasks = () => {
      fetchLocationProducts(locationId);
    };

    getTasks();
  }, [locationId]);

  // Fetch a location's products
  const fetchLocationProducts = (locationId: Number) => {
    fetch("/api/v1/product?id=" + locationId)
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

  return (
    <Main showSidebar={showSidebar}>
      <div>
        <UserOptions
          locationOptions={locationOptions}
          selectedLocationId={locationId}
          setSelectedLocationId={setLocationId}
        />
        <ProductsTable locationProducts={locationProducts} />
      </div>
    </Main>
  );
};

export default ProductsScreen;
