import { Location } from "../../../../types/Location";
import "./LocationsTable.css";

interface LocationsTableProps {
  locations: Location[];
}

const LocationsTable: React.FC<LocationsTableProps> = ({ locations }) => {
  return (
    <div>
      <table className="locations-table">
        <colgroup>
          <col className="table-column-10pc" />
          <col className="table-column-10pc" />
          <col className="table-column-30pc" />
          <col className="table-column-25pc" />
          <col className="table-column-25pc" />
        </colgroup>

        <thead className="table-head">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Row Count</th>
            <th>Average Slots Per Row</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location: Location) => (
            <tr key={location.id}>
              <th>{location.id}</th>
              <th>{location.name}</th>
              <th>{location.address}</th>
              <th>{location.rowCount}</th>
              <th>{location.averageSlotsPerRow}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationsTable;
