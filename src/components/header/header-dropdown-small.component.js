import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectHeaderExtraMenuOpen } from '../../redux/header/header.selectors';
import { toggleExtraDropDownMenu } from '../../redux/header/header.actions';

const smallDropDownMenu = ({ toggleExtraDropDownMenu, gender, closeAllDropDownMenu, isExtraMenuOpen }) => (
    <nav className='header_dropdown-mobile'>
        <ul>
            <li className='gender' onClick={() => toggleExtraDropDownMenu('mens')}>Men<i className="fas fa-chevron-right"></i></li>
            <li className='gender' onClick={() => toggleExtraDropDownMenu('women')}>Women<i className="fas fa-chevron-right"></i></li>
            <li className="link-list"><Link to='/account/login' onClick={closeAllDropDownMenu}>Account<i className="far fa-user"></i></Link></li>
            <li>Contact<i className="far fa-question-circle"></i></li>
        </ul>
        {
            isExtraMenuOpen ?
                <ul className="slide-list">
                    <li className='title' onClick={() => toggleExtraDropDownMenu('')}><i className="fas fa-chevron-left"></i>{gender}</li>
                    <li className="link-list"><Link to={`/shop/${gender}`} onClick={closeAllDropDownMenu}>View All</Link></li>
                    <li className="link-list"><Link to={`/shop/${gender}/sneakers`} onClick={closeAllDropDownMenu}>Sneakers</Link></li>
                    <li className="link-list"><Link to={`/shop/${gender}/runningshoes`} onClick={closeAllDropDownMenu}>Running Shoes</Link></li>
                    <li className="link-list"><Link to={`/shop/${gender}/boots`} onClick={closeAllDropDownMenu}>Boots</Link></li>
                    <li className="link-list"><Link to='/shop/newarrivals' onClick={closeAllDropDownMenu}>New Arrivals</Link></li>
                    <li className="link-list"><Link to='/shop/topsellers' onClick={closeAllDropDownMenu}>Top Sellers</Link></li>
                </ul>
                :
                ''
        }
    </nav>
);

const mapDispatchToProps = dispatch => ({
    toggleExtraDropDownMenu: (gender) => dispatch(toggleExtraDropDownMenu(gender)),
});

const mapStateToProps = createStructuredSelector({
    isExtraMenuOpen: selectHeaderExtraMenuOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(smallDropDownMenu);
