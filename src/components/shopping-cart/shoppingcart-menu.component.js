import React from 'react';
import { Link } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';
import ShoppingCartItem from './shoppingcart-item.component'
import ShoppingCartIcon from './shoppingcart-icon.component'

const ShoppingCartMenu = (props) => {

    const { toggleCartHidden, cartItems, removeItem, addItem, clearItemFromCart, total, itemsCount, closeAllDropDownMenu } = props;
    const shippingMsg = (total < 50 ? <p>You're <span className="amount">$ {50 - total} CAD</span> away from free shipping!</p> : <p>Congrats! You get free standard shipping.</p>);
    const shippingFee = (total < 50 ? 'Standard Fees' : 'FREE');

    return (
        <div className='shopping_cart_menu'>
            <div className='blanket' onClick={toggleCartHidden}></div>
            <div className='shopping_cart_menu-main'>
                <div className='shopping_cart_menu-top'>
                    <i className="fas fa-arrow-right" onClick={toggleCartHidden}></i>
                    <div className='shipping-message'>
                        <ShoppingCartIcon itemsCount={itemsCount} />
                        {shippingMsg}
                    </div>
                </div>
                {
                    cartItems.length === 0 ?
                        (<div className='shopping_cart_menu-empty'>
                            <h2>Your Cart is Empty</h2>
                            <ul>
                                <li className="button"><Link to={`/shop/mens`} onClick={() => { toggleCartHidden(); closeAllDropDownMenu(); }}>SHOP MEN'S</Link></li>
                                <li className="button"><Link to={`/shop/women`} onClick={() => { toggleCartHidden(); closeAllDropDownMenu(); }}>SHOP WOMEN'S</Link></li>
                            </ul>
                        </div>)
                        :
                        (<div className='shopping_cart_menu-bottom'>
                            <div className='items-content'>
                                {
                                    cartItems.map((item, index) =>
                                        <ShoppingCartItem
                                            key={index}
                                            item={item}
                                            index={index}
                                            clearItemFromCart={clearItemFromCart}
                                            addItem={addItem}
                                            removeItem={removeItem}
                                        />
                                    )
                                }
                            </div>
                            <div className='summary'>
                                <p>Subtotal <span>$ {total} CAD</span></p>
                                <p>Shipping <span>{shippingFee}</span></p>
                                <Link to="/checkout" className='button' onClick={() => {
                                    toggleCartHidden();
                                    closeAllDropDownMenu();
                                }}>CHECKOUT</Link>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );

};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (index) => dispatch(clearItemFromCart(index)),
    addItem: (item, size) => dispatch(addItem(item, size)),
    removeItem: (index) => dispatch(removeItem(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartMenu);