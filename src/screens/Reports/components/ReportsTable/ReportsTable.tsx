import { Item } from "../../../../types/Report";
import "./ReportsTable.css";

interface ReportsTableProps {
  report: Item[];
}

const ReportsTable: React.FC<ReportsTableProps> = ({ report }) => {
  return (
    <div>
      <table className="reports-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Row</th>
            <th>Section</th>
            <th>Last Count </th>
            <th>Last Update</th>
          </tr>
        </thead>

        <tbody>
          {report.map((item: Item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.row}</td>
                  <td>{item.section}</td>
                  <td>{item.lastCount}</td>
                  <td>{item.lastUpdate}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTable;
