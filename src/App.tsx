import { useState, useEffect } from "react";
import Sidenav from "./components/Sidenav";
import Table from "./components/Table";
import Row from "./components/Row";
import Section from "./components/Section";

export interface Inventory {
  id: number;
  slots: Slot[];
}

export interface Slot {
  id: number;
  name: string;
  quantity: number;
  section: string;
  verificationDate: string;
}

function App() {
  let page: string = "Inventory";

  const [user, setUser] = useState([
    {
      id: 1,
      firstName: "First",
      lastName: "Last",
    },
  ]);

  const [sidebar, setSidebar] = useState(true);

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
    <div className="App">
      <Sidenav
        page={page}
        user={user}
        onToggle={() => setSidebar(!sidebar)}
        showSidebar={sidebar}
      />
      <Table inventory={inventory} />
    </div>
  );
}

export default App;
