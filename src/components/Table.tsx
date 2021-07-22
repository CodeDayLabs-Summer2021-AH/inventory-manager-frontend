import { BiDotsVerticalRounded } from "react-icons/bi";
import { Inventory, Slot } from "../types/Inventory";

interface TableProps {
  inventory: Inventory | null;
}

const Table = ({ inventory }: TableProps) => {
  return (
    <table>
      <th>Product ID</th>
      <th>Name</th>
      <th>Location Quantity</th>
      <th>Section</th>
      <th>Last Verification Date </th>
      <th>Actions</th>
      {inventory
        ? inventory.slots.map((slot: Slot) => {
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
          })
        : "could't load inventory"}
    </table>
  );
};

export default Table;
