import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "./UserOptions.css";

interface UserOptionsProps {
  onSearchBarEnter: (query: String) => void;
}

const UserOptions: React.FC<UserOptionsProps> = ({ onSearchBarEnter }) => {
  const [reportsFilter, setReportsFilter] = useState("");

  const onFilterReportsInputChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setReportsFilter(e.currentTarget.value);
  };

  const onReportsInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      onSearchBarEnter(reportsFilter);
    }
  };

  return (
    <div className="user-options-container">
      <div className="equal-width-column">
        <div className="search-bar-container">
          <BiSearch style={{ marginLeft: 8 }} />
          <input
            type="text"
            placeholder="Filter Reports"
            className="search-bar"
            value={reportsFilter}
            onChange={onFilterReportsInputChange}
            onKeyDown={onReportsInputKeyDown}
          />
        </div>
      </div>
      <div className="equal-width-column">
        <h3 style={{ textAlign: "center" }}>Displaying Reports</h3>
      </div>
      <div className="equal-width-column"></div>
    </div>
  );
};

export default UserOptions;
