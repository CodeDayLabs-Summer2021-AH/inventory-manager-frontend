import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "./UserOptions.css";

interface UserOptionsProps {
  onSearchBarEnter: (query: String) => void;
}

const UserOptions: React.FC<UserOptionsProps> = ({ onSearchBarEnter }) => {
  const [locationsFilter, setLocationsFilter] = useState("");

  const onFilterLocationsInputChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setLocationsFilter(e.currentTarget.value);
  };

  const onLocationsInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      onSearchBarEnter(locationsFilter);
    }
  };

  return (
    <div className="user-options-container">
      <div className="equal-width-column">
        <div className="search-bar-container">
          <BiSearch style={{ marginLeft: 8 }} />
          <input
            type="text"
            placeholder="Filter Locations"
            className="search-bar"
            value={locationsFilter}
            onChange={onFilterLocationsInputChange}
            onKeyDown={onLocationsInputKeyDown}
          />
        </div>
      </div>
      <div className="equal-width-column">
        <h3 style={{ textAlign: "center" }}>Displaying Locations</h3>
      </div>
      <div className="equal-width-column"></div>
    </div>
  );
};

export default UserOptions;
