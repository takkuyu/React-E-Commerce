import React from 'react';
import { Link } from 'react-router-dom'
import HeaderDropDownMenu from './header-dropdown.component';
import logo from '../../img/takaya-logo.png';
import ShoppingCartMenu from '../shopping-cart/shoppingcart-menu.component';
import ShoppingCartIcon from '../shopping-cart/shoppingcart-icon.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartHidden, selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { selectHeaderMenuOpen, selectHeaderGender } from '../../redux/header/header.selectors';
import { closeAllDropDownMenu, openDropDownMenu } from '../../redux/header/header.actions';

const Header = ({ toggleCartHidden, hidden, itemsCount, isLoggedin, isDropDownMenuOpen, headerGender, closeAllDropDownMenu, openDropDownMenu }) => (
  <>
    <header className="header">
      <ul className='header-left'>
        <li><i id='bars' className={`${isDropDownMenuOpen ? "fas fa-times" : "fas fa-bars"}`} onClick={() => openDropDownMenu('')} ></i></li>
        <li className={`desktop_menu ${headerGender === 'mens' ? "is-active" : "inactive"}`} onClick={() => openDropDownMenu('mens')}>MEN</li>
        <li className={`desktop_menu ${headerGender === 'women' ? "is-active" : "inactive"}`} onClick={() => openDropDownMenu('women')}>WOMEN</li>
      </ul>
      <div className='header-logo'>
        <Link to='/' onClick={closeAllDropDownMenu}><img src={logo} alt='logo' /></Link>
      </div>
      <div className='header-right'>
        <p className="desktop_menu">
          {isLoggedin ? <Link to='/account' onClick={closeAllDropDownMenu}>ACCOUNT</Link> : <Link to='/account/login' onClick={closeAllDropDownMenu}>LOGIN</Link>}
        </p>
        <p className="desktop_menu">CONTACT</p>
        <div onClick={toggleCartHidden}>
          <ShoppingCartIcon itemsCount={itemsCount} />
        </div>
      </div>
    </header>

    <HeaderDropDownMenu state={isDropDownMenuOpen ? 'active' : 'inactive'} gender={headerGender} closeAllDropDownMenu={closeAllDropDownMenu} />

    {
      hidden ? '' : <ShoppingCartMenu toggleCartHidden={toggleCartHidden} itemsCount={itemsCount} closeAllDropDownMenu={closeAllDropDownMenu}/>
    }
  </>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  closeAllDropDownMenu: () => dispatch(closeAllDropDownMenu()),
  openDropDownMenu: (gender) => dispatch(openDropDownMenu(gender)),
});

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  itemsCount: selectCartItemsCount,
  isDropDownMenuOpen: selectHeaderMenuOpen,
  headerGender: selectHeaderGender,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
