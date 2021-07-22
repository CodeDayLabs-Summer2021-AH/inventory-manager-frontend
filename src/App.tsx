import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InventoryScreen from "./screens/Inventory/InventoryScreen";
import Locations from "./screens/Locations/LocationsScreen";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/inventory">
            <InventoryScreen />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
