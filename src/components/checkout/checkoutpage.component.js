import React from 'react';
import { Container, Table } from 'reactstrap';
import StripeCheckoutButton from '../stripe-button/stripe-button.component'

class CheckoutPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: []
        }
        // console.log(this.props)
    }

    componentDidMount() {
        const cartItems = (JSON.parse(sessionStorage.getItem('cart')) !== null ? JSON.parse(sessionStorage.getItem('cart')) : []);
        this.setState({ cartItems: cartItems })
    }

    deleteItem(this_index) {
        const cartItems = this.state.cartItems.filter((item, index) => index !== this_index);
        this.props.updateCartCounter(cartItems.length) // update cart-items counter with the length
        this.setState({
            cartItems: cartItems
        }, () => sessionStorage.setItem('cart', JSON.stringify(this.state.cartItems)))
    }

    handleNumberOfItems(type, index) {

        const cartItems = this.state.cartItems.slice();

        if (type === 'minus') {
            if (cartItems[index].amount <= 1) {
                this.deleteItem(index)
                return
            }
            cartItems[index].amount--;
        } else if (type === 'plus') {
            cartItems[index].amount++;
        }

        this.setState({
            cartItems: cartItems
        }, () => sessionStorage.setItem('cart', JSON.stringify(this.state.cartItems)))

    }

    calculateSubTotal(arr) {
        let sum = 0;
        arr.forEach(item => {
            sum = sum + item.price * item.amount;
        })
        return sum;
    }

    render() {
        const subTotal = this.calculateSubTotal(this.state.cartItems)
        const shippingFee = (subTotal < 50 ? 'Standard Fees' : 'FREE');
        const taxes = (subTotal * 0.12).toFixed(1);
        const total = (subTotal + subTotal * 0.12).toFixed(1);

        return (
            <div style={{ marginTop: '5rem' }} className="checkout-container">
                <Container>
                    <h1>My Cart</h1>
                    {
                        this.state.cartItems.length !== 0 ?
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
                                                this.state.cartItems.map((item, index) =>
                                                    (
                                                        <tr key={index}>
                                                            <td style={{ paddingLeft: '0' }}><img src={item.imageUrl} alt='product-img' /> </td>
                                                            <td>{item.name}</td>
                                                            <td>$ {item.price}</td>
                                                            <td >
                                                                <div className='item-counter'>
                                                                    <i className="fas fa-minus" onClick={() => this.handleNumberOfItems('minus', index)}></i>
                                                                    <span>{item.amount}</span>
                                                                    <i className="fas fa-plus" onClick={() => this.handleNumberOfItems('plus', index)}></i>
                                                                </div>
                                                            </td>
                                                            <td>{item.size}</td>
                                                            <td>$ {item.price * item.amount}</td>
                                                            <td style={{ fontWeight: '600' }} onClick={() => this.deleteItem(index)}> <i className="fas fa-times" ></i></td>
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
                                    {/* <p className='button'>PAY NOW</p> */}
                                    <StripeCheckoutButton className='button' price={total} cartItems={this.state.cartItems} currentUserId={this.props.currentUserId}/>
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
}

export default CheckoutPage;