import React from 'react';
import LargeDropDownMenu from './header-dropdown-large.component'
import SmallDropDownMenu from './header-dropdown-small.component'


const HeaderDropDownMenu = ({ gender, closeAllDropDownMenu }) => (
  <div className="header_dropdown">

    <SmallDropDownMenu closeAllDropDownMenu={closeAllDropDownMenu} gender={gender} />

    <LargeDropDownMenu closeAllDropDownMenu={closeAllDropDownMenu} gender={gender} />

    <div className='blanket' onClick={closeAllDropDownMenu}></div>
  </div>
);


export default HeaderDropDownMenu;
