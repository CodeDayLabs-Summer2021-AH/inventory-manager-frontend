import React from "react";
import { useState } from "react";
import Sidenav from "../Sidenav";
import "./Main.css";

interface MainProps {
  showSidebar: boolean;
}

const Main: React.FC<MainProps> = ({ showSidebar, children }) => {
  const [user, setUser] = useState({
    id: 1,
    firstName: "First",
    lastName: "Last",
  });

  return (
    <div className="container">
      <Sidenav showSidebar={showSidebar} user={user} />
      <div className="children">{children}</div>
    </div>
  );
};

export default Main;
