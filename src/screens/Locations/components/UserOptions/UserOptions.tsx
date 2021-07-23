import { BiSearch } from "react-icons/bi";
import "./UserOptions.css";

const UserOptions = () => {
  return (
    <div className="user-options-container">
      <div className="equal-width-column">
        <div className="search-bar-container">
          <BiSearch style={{ marginLeft: 8 }} />
          <input
            type="text"
            placeholder="Filter Locations"
            className="search-bar"
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
