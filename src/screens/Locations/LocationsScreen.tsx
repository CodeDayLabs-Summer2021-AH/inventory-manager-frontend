import { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import UserOptions from "./components/UserOptions/UserOptions";
import LocationsTable from "./components/LocationsTable/LocationsTable";
import { Location } from "../../types/Location";

interface LocationsScreenProps {
  showSidebar: boolean;
}

const LocationsScreen: React.FC<LocationsScreenProps> = ({ showSidebar }) => {
  const [locations, setLocations] = useState<Location[]>([]);

  const fetchLocations = (query: string) => {
    let url = "";

    if (query.length > 0) {
      url = `/api/v1/locations?query=${query}`;
    } else {
      url = `/api/v1/locations`;
    }

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
      })
      .then((data) => setLocations(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchLocations("");
  }, []);

  return (
    <Main showSidebar={showSidebar}>
      <div>
        <UserOptions onSearchBarEnter={fetchLocations} />
        <LocationsTable locations={locations} />
      </div>
    </Main>
  );
};

export default LocationsScreen;
