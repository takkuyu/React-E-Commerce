import React from 'react';
import { Container, Table } from 'reactstrap';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearItemFromCart, removeItem, addItem, clearAllItemsFromCart } from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const CheckoutPage = (props) => {

    const { cartItems, removeItem, addItem, clearItemFromCart, clearAllItemsFromCart, subTotal, currentUser } = props;
    const shippingFee = (subTotal < 50 ? 'Standard Fees' : 'FREE');
    const taxes = (subTotal * 0.12).toFixed(2);
    const total = (subTotal + subTotal * 0.12).toFixed(2);

    return (
        <div style={{ marginTop: '5rem' }} className="checkout-container">
            <Container>
                <h1>My Cart</h1>
                {
                    cartItems.length !== 0 ?
                        <div>
                            <div className="table-responsive-md">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '8rem' }}></th>
                                            <th className='lg-cell'></th>
                                            <th className='md-cell'>PRICE</th>
                                            <th className='md-cell'>QTY</th>
                                            <th className='md-cell'>SIZE</th>
                                            <th>TOTAL</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map((item, index) =>
                                                (
                                                    <tr key={index}>
                                                        <td style={{ paddingLeft: '0' }}><img src={item.imageUrl} alt='product-img' /> </td>
                                                        <td>{item.name}</td>
                                                        <td>$ {item.price}</td>
                                                        <td >
                                                            <div className='item-counter'>
                                                                <i className="fas fa-minus" onClick={() => removeItem(index)}></i>
                                                                <span>{item.amount}</span>
                                                                <i className="fas fa-plus" onClick={() => addItem(item, item.size)}></i>
                                                            </div>
                                                        </td>
                                                        <td>{item.size}</td>
                                                        <td>$ {item.price * item.amount}</td>
                                                        <td style={{ fontWeight: '600' }} onClick={() => clearItemFromCart(index)}> <i className="fas fa-times" ></i></td>
                                                    </tr>
                                                )
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            <div className="summary-wrapper">
                                <p>Subtotal <span>$ {subTotal}</span></p>
                                <p>Taxes <span>$ {taxes}</span></p>
                                <p>Shipping <span>{shippingFee}</span></p>
                                <p className='total'>Total <span>$ {total} CAD</span></p>
                                <StripeCheckoutButton className='button' price={total} cartItems={cartItems} clearAllItemsFromCart={clearAllItemsFromCart} currentUser={currentUser}/>
                                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#ff0000' }}>*Please use the following test credit card for payments*</p>
                                <p style={{ textAlign: 'center' }}>4242 4242 4242 4242 - Exp: 01/24 - CVV: 123</p>
                            </div>
                        </div>
                        :
                        <div className='empty-container'>
                            <h2>Your cart is currently empty.</h2>
                            <p className="button" onClick={() => this.props.history.push('/')}>CONTINUE SHOPPING</p>
                        </div>
                }
            </Container>
        </div>
    );

}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    subTotal: selectCartTotal,
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (index) => dispatch(clearItemFromCart(index)),
    addItem: (item, size) => dispatch(addItem(item, size)),
    removeItem: (index) => dispatch(removeItem(index)),
    clearAllItemsFromCart: () => dispatch(clearAllItemsFromCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);