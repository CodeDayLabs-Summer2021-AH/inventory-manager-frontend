import { Item } from "../../../../types/Report";
import "./ReportsTable.css";

interface ReportsTableProps {
  reports: Item[];
}

const ReportsTable: React.FC<ReportsTableProps> = ({ reports }) => {
  return (
    <div>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Location Quantity</th>
            <th>Section</th>
            <th>Last Verification Date </th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {inventory &&
            inventory.slots.map((slot: Slot) => {
              return (
                <tr key={slot.id}>
                  <td>{slot.id}</td>
                  <td>{slot.name}</td>
                  <td>{slot.quantity}</td>
                  <td>{slot.section}</td>
                  <td>{slot.verificationDate}</td>
                  <td>
                    <BiDotsVerticalRounded />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
