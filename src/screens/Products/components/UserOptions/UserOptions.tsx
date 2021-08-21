import { useState } from "react";
import "./UserOptions.css";

interface OptionsProps {
  setlocationId: any;
}

const UserOptions: React.FC<OptionsProps> = ({ setlocationId }) => {

  return (
    <div className="user-options-container">
      <div className="equal-width-column"></div>
      <div className="equal-width-column">
        <h3 style={{ textAlign: "center" }}>
          Displaying Products for location
        </h3>
      </div>
      <div className="equal-width-column">
        <div className="drop-down-container">
          <select >
            <option selected value="">Select Location</option>
            <option value="location1">Location One</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserOptions;
