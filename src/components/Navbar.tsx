import { BiMenuAltLeft } from "react-icons/bi";

interface NavbarProps {
  pageName: string;
  onExpandSidenavClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ pageName, onExpandSidenavClick }) => {
  return (
    <div className="navbar">
      <i className="menu-bars">
        <BiMenuAltLeft className="bars-icon" onClick={onExpandSidenavClick} />
      </i>
      <h2>{pageName}</h2>
    </div>
  );
};

export default Navbar;
