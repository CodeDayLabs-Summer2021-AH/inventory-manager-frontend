import { useState } from "react";
import { BiMenuAltLeft, BiUserCircle } from "react-icons/bi";

type SidenavProps = {
    page: string,
    user: any,
    onToggle: any,
    showSidebar: boolean
}

const Sidenav = ({ page, user, onToggle, showSidebar }:SidenavProps) => {
    return (
        <>
            <div className="navbar">
                <i className='menu-bars'>
                    <BiMenuAltLeft className='bars-icon' onClick={onToggle} />
                </i>
                <h2>{page}</h2>
            </div>
            <nav className={showSidebar ? 'nav-menu close' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='user-profile'>
                        <i className='user-icon'>
                            <BiUserCircle />
                        </i>
                        <p>{user[0].firstName} {user[0].lastName}</p>
                    </li>
                    <li className='nav-link'>
                        <button>Inventory</button>
                    </li>
                    <li className='nav-link'>
                        <button>Locations</button>
                    </li>
                    <li className='nav-link'>
                        <button>Products</button>
                    </li>
                    <li className='nav-link'>
                        <button>Reports</button>
                    </li>                                                         
                </ul>
                <ul className='nav-group-bottom'>
                    <li className='nav-link'>
                        <button>Help</button>
                    </li> 
                    <li className='nav-link'>
                        <button>Settings</button>
                    </li> 
                    <li className='nav-link'>
                        <button>About</button>
                    </li>                     
                </ul>
            </nav>
        </>
    )
}

export default Sidenav
