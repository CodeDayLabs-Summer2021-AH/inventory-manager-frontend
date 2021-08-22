import { useState, useEffect } from "react";
import Main from "../../components/Main/Main";
import { Inventory } from "../../types/Inventory";
import InventoryTable from "./components/InventoryTable/InventoryTable";

interface InventoryScreenProps {
  showSidebar: boolean;
}

const InventoryScreen: React.FC<InventoryScreenProps> = ({ showSidebar }) => {
  const [inventory, setInventory] = useState<Inventory | null>(null);

  useEffect(() => {
    const getTasks = () => {
      fetchInventory();
    };

    getTasks();
  }, []);

  // Fetch Inventory
  const fetchInventory = () => {
    fetch("/api/v1/inventory")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
      })
      .then((data) => setInventory(data))
      .catch((error) => console.error(error));
  };

  return (
    <Main showSidebar={showSidebar}>
      <div>
        <InventoryTable inventory={inventory} />
      </div>
    </Main>
  );
};

export default InventoryScreen;
