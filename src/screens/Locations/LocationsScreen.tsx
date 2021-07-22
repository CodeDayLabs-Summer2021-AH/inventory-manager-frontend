import "./LocationsScreen.css";
import { BiMenuAltLeft, BiSearch } from "react-icons/bi";
import { MOCK_LOCATIONS } from "../../mock/MOCK_LOCATIONS";
import { Location } from "../../types/Location";
import { useState } from "react";

const LocationsScreen = () => {
  const [locations, setLocations] = useState(MOCK_LOCATIONS);

  console.log(locations);

  return (
    <div>
      <div className="header">
        <BiMenuAltLeft color="#eeeeee" size={32} style={{ marginLeft: 32 }} />
        <h2 style={{ color: "white", marginLeft: 16 }}>Locations</h2>
      </div>
      <div className="display-locations">
        <div style={{ flex: 1 }}>
          <div className="search-bar-container">
            <BiSearch style={{ marginLeft: 8 }} />
            <input
              type="text"
              placeholder="Filter Locations"
              className="search-bar"
            />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: "center" }}>Displaying Locations</h3>
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
      <table className="locations-table">
        <colgroup>
          <col className="table-column-10pc" />
          <col className="table-column-10pc" />
          <col className="table-column-30pc" />
          <col className="table-column-25pc" />
          <col className="table-column-25pc" />
        </colgroup>

        <tr>
          <th className="header-table-row">ID</th>
          <th className="header-table-row">Name</th>
          <th className="header-table-row">Address</th>
          <th className="header-table-row">Row Count</th>
          <th className="header-table-row">Average Slots Per Row</th>
        </tr>
        {locations.map((location: Location) => (
          <tr>
            <th>{location.id}</th>
            <th>{location.name}</th>
            <th>{location.address}</th>
            <th>{location.rowCount}</th>
            <th>{location.averageSlotsPerRow}</th>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LocationsScreen;
