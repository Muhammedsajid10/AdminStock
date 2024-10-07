import React from 'react';
import { Link } from 'react-router-dom'; 
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, 
         BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill,
         BsFillBagDashFill, BsFillHouseAddFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>
          X
        </span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/dashboard"> 
            <BsGrid1X2Fill className='icon' />Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/frachise"> 
            <BsFillHouseAddFill className='icon' />Franchise
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/categories">
            <BsFillGrid3X3GapFill className='icon' />Categories
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/product">
            <BsFillArchiveFill className='icon' />Products
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/subProduct">
            <BsFillBagDashFill className='icon' />Sub Products
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;


