import { useState, useEffect } from "react";
import Sidenav from "../../components/Sidenav";
import Table from "../../components/Table";
import { Inventory } from "../../types/Inventory";

const InventoryScreen = () => {
  const pageName: string = "Inventory";

  const [user, setUser] = useState({
    id: 1,
    firstName: "First",
    lastName: "Last",
  });
  const [showSidebar, setSidebar] = useState(true);
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
    <div>
      <Sidenav
        pageName={pageName}
        user={user}
        onExpandSidebarClick={() => setSidebar(!showSidebar)}
        showSidebar={showSidebar}
      />
      <Table inventory={inventory} />
    </div>
  );
};

export default InventoryScreen;
