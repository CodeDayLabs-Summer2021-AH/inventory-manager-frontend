import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import InventoryScreen from "./screens/Inventory/InventoryScreen";
import Locations from "./screens/Locations/LocationsScreen";
import Reports from "./screens/Reports/ReportsScreen";
import Products from "./screens/Products/ProductsScreen";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Reports">
            <Navbar
              pageName="Reports"
              onExpandSidenavClick={() => setShowSidebar(!showSidebar)}
            />
            <Reports showSidebar={showSidebar} />
          </Route>
          <Route path="/Reports">
            <Navbar
              pageName="Reports"
              onExpandSidenavClick={() => setShowSidebar(!showSidebar)}
            />
            <Reports showSidebar={showSidebar} />
          </Route>
          <Route path="/products">
            <Navbar
              pageName="Products"
              onExpandSidenavClick={() => setShowSidebar(!showSidebar)}
            />
            <Products showSidebar={showSidebar} />
          </Route>          
        </Switch>
      </div>
    </Router>
  );
};

export default App;
