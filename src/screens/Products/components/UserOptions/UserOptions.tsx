import React from "react";
import "./UserOptions.css";

interface UserOptionsProps {
  locationOptions: string[];
  selectedLocationId: number;
  setSelectedLocationId: (selectedLocationId: number) => void;
}

const UserOptions: React.FC<UserOptionsProps> = ({
  locationOptions,
  selectedLocationId,
  setSelectedLocationId,
}) => {
  const onSelectIndexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    const index = locationOptions.indexOf(selectedOption);
    setSelectedLocationId(index + 1);
  };

  return (
    <div className="user-options-container">
      <div className="equal-width-column"></div>
      <div className="equal-width-column">
        <h3 style={{ textAlign: "center" }}>
          Displaying Products for Location
        </h3>
      </div>
      <div className="equal-width-column">
        <div className="drop-down-container">
          <select value={selectedLocationId} onChange={onSelectIndexChange}>
            <option value="Select Location">Select Location</option>
            {locationOptions.map((option: string, i: number) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserOptions;
