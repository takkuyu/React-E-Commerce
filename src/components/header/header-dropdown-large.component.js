import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import women_topsellers_img from '../../img/women-all.jpg';
import women_newarrivals_img from '../../img/women-running.jpg';
import men_topsellers_img from '../../img/topseller.jpg';
import men_newarrivals_img from '../../img/new-arrivals.jpg';


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
                        <li className='collection-item' style={{ backgroundImage: gender === 'mens' ? `url(${men_topsellers_img})` : `url(${women_topsellers_img})` }} ><Link to={`/shop/${gender}/topsellers`} onClick={closeAllDropDownMenu}>TOP SELLERS</Link></li>
                        <li className='collection-item' style={{ backgroundImage: gender === 'mens' ? `url(${men_newarrivals_img})` : `url(${women_newarrivals_img})` }}><Link to={`/shop/${gender}/newarrivals`} onClick={closeAllDropDownMenu}>NEW ARRIVALS</Link></li>
                    </ul>
                </div>
            </div>
        </Container>
    </nav>
)

export default LargeDropDownMenu;