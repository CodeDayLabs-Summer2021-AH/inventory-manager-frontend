import { BiDotsVerticalRounded } from "react-icons/bi";
import { Inventory, Slot } from "../../../../types/Inventory";
import "./InventoryTable.css";

interface InventoryTableProps {
  inventory: Inventory | null;
}

const InventoryTable: React.FC<InventoryTableProps> = ({ inventory }) => {
  return (
    <div>
      <table className="inventory-table">
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
