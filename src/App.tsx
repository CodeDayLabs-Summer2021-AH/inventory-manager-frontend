import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import InventoryScreen from "./screens/Inventory/InventoryScreen";
import LocationsScreen from "./screens/Locations/LocationsScreen";
import ProductsScreen from "./screens/Products/ProductsScreen";
import ReportsScreen from "./screens/Reports/ReportsScreen";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/inventory">
            <Navbar
              pageName="Inventory"
              onExpandSidenavClick={() => setShowSidebar(!showSidebar)}
            />
            <InventoryScreen showSidebar={showSidebar} />
          </Route>
          <Route path="/locations">
            <Navbar
              pageName="Locations"
              onExpandSidenavClick={() => setShowSidebar(!showSidebar)}
            />
            <LocationsScreen showSidebar={showSidebar} />
          </Route>
          <Route path="/products">
            <Navbar
              pageName="Products"
              onExpandSidenavClick={() => setShowSidebar(!showSidebar)}
            />
            <ProductsScreen showSidebar={showSidebar} />
          </Route>
          <Route path="/reports">
            <Navbar
              pageName="Reports"
              onExpandSidenavClick={() => setShowSidebar(!showSidebar)}
            />
            <ReportsScreen showSidebar={showSidebar} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
