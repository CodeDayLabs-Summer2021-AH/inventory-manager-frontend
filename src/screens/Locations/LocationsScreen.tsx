import "./LocationsScreen.css";
import { MOCK_LOCATIONS } from "../../mock/MOCK_LOCATIONS";
import { useState } from "react";
import Main from "../../components/Main/Main";
import UserOptions from "./components/UserOptions/UserOptions";
import LocationsTable from "./components/LocationsTable/LocationsTable";

interface LocationsScreenProps {
  showSidebar: boolean;
}

const LocationsScreen: React.FC<LocationsScreenProps> = ({ showSidebar }) => {
  const [locations, setLocations] = useState(MOCK_LOCATIONS);

  return (
    <Main showSidebar={showSidebar}>
      <div>
        <UserOptions />
        <LocationsTable locations={locations} />
      </div>
    </Main>
  );
};

export default LocationsScreen;
