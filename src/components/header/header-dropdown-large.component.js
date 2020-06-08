import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const LargeDropDownMenu = ({ gender, closeAllDropDownMenu }) => (
    <nav className='header_dropdown-desktop'>
        <Container>
            <div className='header_dropdown-main'>
                <div className="header_dropdown-shoes">
                    <p>SHOES</p>
                    <ul>
                        <li><Link to={`/shop/${gender}`} onClick={closeAllDropDownMenu}>View All</Link></li>
                        <li><Link to={`/shop/${gender}/sneakers`} onClick={closeAllDropDownMenu}>Sneakers</Link></li>
                        <li><Link to={`/shop/${gender}/runningshoes`} onClick={closeAllDropDownMenu}>Running Shoes</Link></li>
                        <li><Link to={`/shop/${gender}/boots`} onClick={closeAllDropDownMenu}>Boots</Link></li>
                        <li><Link to={`/shop/${gender}/newarrivals`} onClick={closeAllDropDownMenu}>New Arrivals</Link></li>
                    </ul>
                </div>
                <div className="header_dropdown-collections">
                    <p>COLLECTIONS</p>
                    <ul>
                        <li className={`collection-item ${gender === 'mens' ? 'mens-topsellers' : 'women-topsellers'}`} >
                            <Link to={`/shop/${gender}/topsellers`} onClick={closeAllDropDownMenu}>TOP SELLERS</Link>
                        </li>
                        <li className={`collection-item ${gender === 'mens' ? 'mens-newarrivals' : 'women-newarrivals'}`} >
                            <Link to={`/shop/${gender}/newarrivals`} onClick={closeAllDropDownMenu}>NEW ARRIVALS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </nav>
)

export default LargeDropDownMenu;