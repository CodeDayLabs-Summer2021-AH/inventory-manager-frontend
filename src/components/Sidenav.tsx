import { BiUserCircle } from "react-icons/bi";
import { User } from "../types/User";
import { Link } from "react-router-dom";

interface SidenavProps {
  showSidebar: boolean;
  user: User;
}

const Sidenav = ({ showSidebar, user }: SidenavProps) => {
  return (
    <div className={showSidebar ? "nav-menu" : "nav-menu close"}>
      <nav className="items-container">
        <ul>
          <li className="user-profile">
            <i className="user-icon">
              <BiUserCircle />
            </i>
            <p>
              {user.firstName} {user.lastName}
            </p>
          </li>
          <li className="nav-link">
            <Link to="/inventory">Inventory</Link>
          </li>
          <li className="nav-link">
            <Link to="/locations">Locations</Link>
          </li>
          <li className="nav-link">
            <Link to="/products">Products</Link>
          </li>
          <li className="nav-link">
            <Link to="/reports">Reports</Link>
          </li>
        </ul>
        <ul>
          <li className="nav-link">
            <Link to="/help">Help</Link>
          </li>
          <li className="nav-link">
            <Link to="/settings">Settings</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidenav;
