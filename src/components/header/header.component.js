import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import HeaderDropDownMenu from './header-dropdown.component';
import logo from '../../img/takaya-logo.png';
import ShoppingCartMenu from '../shopping-cart/shoppingcart-menu.component';
import ShoppingCartIcon from '../shopping-cart/shoppingcart-icon.component';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartHidden, selectCartItemsCount } from '../../redux/cart/cart.selectors';


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDropDownMenuOpen: false,
      isExtraMenuOpen: false,
      gender: ''
    }
    this.toggleExtraMenu = this.toggleExtraMenu.bind(this); // @Note: needed for setState
    this.openDropDownMenu = this.openDropDownMenu.bind(this); // @Note: needed for setState
    this.closeDropDownMenu = this.closeDropDownMenu.bind(this); // @Note: needed for setState
  }


  openDropDownMenu(gender) {
    if (this.state.isDropDownMenuOpen) {
      if (this.state.gender === gender) {
        this.closeDropDownMenu()
        return
      } else {
        this.setState({
          isDropDownMenuOpen: true,
          gender: gender
        })
        return
      }
    }
    this.setState({
      isDropDownMenuOpen: !this.state.isDropDownMenuOpen,
      gender: gender
    })
  }


  closeDropDownMenu() {
    this.setState({
      isDropDownMenuOpen: false,
      isExtraMenuOpen: false,
      gender: '',
    })
  }

  toggleExtraMenu(gender) {
    this.setState({
      isExtraMenuOpen: !this.state.isExtraMenuOpen,
      gender: gender
    })
  }

  render() {

    const { toggleCartHidden, hidden, itemsCount, isLoggedin } = this.props;

    const dropDowmMenu = (this.state.isDropDownMenuOpen ?
      <HeaderDropDownMenu
        closeDropDownMenu={this.closeDropDownMenu}
        toggleExtraMenu={this.toggleExtraMenu}
        gender={this.state.gender}
        isExtraMenuOpen={this.state.isExtraMenuOpen}
      /> : '');

    const shoppingCartMenu = (hidden ? '' : <ShoppingCartMenu toggleCartHidden={toggleCartHidden} itemsCount={itemsCount} />);

    return (
      <div className='header_container'>
        <header className="header">
          <ul className='header-left'>
            <li>
              <i id='bars' className={`${this.state.isDropDownMenuOpen ? "fas fa-times" : "fas fa-bars"}`} onClick={() => { this.setState({ isDropDownMenuOpen: !this.state.isDropDownMenuOpen }) }} ></i>
            </li>
            <li className={`desktop_menu ${this.state.gender === 'Men' ? "is-active" : "inactive"}`} onClick={() => { this.openDropDownMenu('Men') }}>MEN</li>
            <li className={`desktop_menu ${this.state.gender === 'Women' ? "is-active" : "inactive"}`} onClick={() => { this.openDropDownMenu('Women') }}>WOMEN</li>
          </ul>
          <div className='header-logo'>
            <Link to='/' onClick={this.closeDropDownMenu}><img src={logo} alt='logo' /></Link>
          </div>
          <div className='header-right'>
            <p className="desktop_menu">
              {isLoggedin ? <Link to='/account'>ACCOUNT</Link> : <Link to='/account/login'>LOGIN</Link>}
            </p>
            <p className="desktop_menu">CONTACT</p>
            <div onClick={toggleCartHidden}>
              <ShoppingCartIcon itemsCount={itemsCount} />
            </div>
          </div>
        </header>
        {dropDowmMenu}
        {shoppingCartMenu}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  itemsCount: selectCartItemsCount,
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Header);
