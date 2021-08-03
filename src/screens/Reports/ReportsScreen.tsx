import { useState, useEffect } from "react";
import Main from "../../components/Main/Main";
import "./ReportsScreen.css";
import InventoryTable from "./components/ReportsTable/ReportsTable";
import { Item } from "../../types/Report";

interface ReportsScreenProps {
  showSidebar: boolean;
}

const ReportsScreen: React.FC<ReportsScreenProps> = ({ showSidebar }) => {
  const [report, setReport] = useState<Item[]>([]);

  useEffect(() => {
    const getTasks = () => {
      fetchReport();
    };

    getTasks();
  }, []);

  // Fetch Inventory
  const fetchReport = () => {
    fetch("/api/v1/reports")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
      })
      .then((data) => setReport(data))
      .catch((error) => console.error(error));
  };

  return (
    <Main showSidebar={showSidebar}>
      <div>
        <ReportsTable reports={reports} />
      </div>
    </Main>
  );
};

export default ReportsScreen;
