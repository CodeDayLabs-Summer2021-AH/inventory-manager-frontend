import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Main.css";

interface MainProps {
  showSidebar: boolean;
}

const Main: React.FC<MainProps> = ({ showSidebar, children }) => {
  // eslint-disable-next-line
  const [user, setUser] = useState({
    id: 1,
    firstName: "First",
    lastName: "Last",
  });

  return (
    <div className="container">
      <Sidebar showSidebar={showSidebar} user={user} />
      <div className="children">{children}</div>
    </div>
  );
};

export default Main;
