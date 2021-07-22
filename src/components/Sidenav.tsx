import { BiMenuAltLeft, BiUserCircle } from "react-icons/bi";
import { User } from "../types/User";
import { Link } from "react-router-dom";

interface SidenavProps {
  pageName: string;
  user: User;
  onExpandSidebarClick: () => void;
  showSidebar: boolean;
}

const Sidenav = ({
  pageName,
  user,
  onExpandSidebarClick,
  showSidebar,
}: SidenavProps) => {
  return (
    <div>
      <div className="navbar">
        <i className="menu-bars">
          <BiMenuAltLeft className="bars-icon" onClick={onExpandSidebarClick} />
        </i>
        <h2>{pageName}</h2>
      </div>
      <nav className={showSidebar ? "nav-menu close" : "nav-menu"}>
        <ul className="nav-menu-items">
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
        <ul className="nav-group-bottom">
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
