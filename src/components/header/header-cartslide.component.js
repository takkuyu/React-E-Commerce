import React from 'react';
import { withRouter } from 'react-router-dom'

class CartSlide extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: []
        }
        console.log('constructor')
        console.log(this.props)
    }

    componentDidMount() {
        const cartItems = (JSON.parse(sessionStorage.getItem('cart')) !== null ? JSON.parse(sessionStorage.getItem('cart')) : []);

        this.setState({ cartItems: cartItems })

        console.log('DidMount')
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

    generateCartItems(cartItems) {
        return cartItems.map((item, index) => {

            return (
                <div className='items-card' key={index}>
                    <img src={item.imageUrl} alt='' />

                    <div className='card-inner-left'>
                        <h2>{item.name}</h2>
                        <p>{item.color}</p>
                        <p>Size: {item.size}</p>
                        <div className='item-counter'>
                            <i className="fas fa-minus" onClick={() => this.handleNumberOfItems('minus', index)}></i>
                            <span>{item.amount}</span>
                            <i className="fas fa-plus" onClick={() => this.handleNumberOfItems('plus', index)}></i>
                        </div>
                    </div>

                    <i className="fas fa-times" onClick={() => this.deleteItem(index)}></i>
                    <p className='price'>$ {item.price}</p>
                </div>
            );
        })
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
        const toggleCartModal = this.props.toggleCartModal;
        const shippingMsg = (subTotal < 50 ? <p>You're <span className="amount">$ {50 - subTotal} CAD</span> away from free shipping!</p> : <p>Congrats! You get free standard shipping.</p>);
        const shippingFee = (subTotal < 50 ? 'Standard Fees' : 'FREE');

        return (
            <div className='cartslide-container'>
                <div className='blanket' onClick={toggleCartModal}></div>
                <div className='cartslide-content'>
                    <div className='content-top'>
                        <i className="fas fa-arrow-right" onClick={toggleCartModal}></i>
                        <div className='shipping-message'>
                            <div id="shopping-cart">
                                <span className="fa-stack has-badge" data-count={this.props.itemCounter}>
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                                </span>
                            </div>
                            {shippingMsg}
                        </div>
                    </div>
                    {
                        this.state.cartItems.length === 0 ?
                            <div className='empty-wrapper'>
                                <h2>Your Cart is Empty</h2>
                                <ul>
                                    <li>SHOP MEN'S</li>
                                    <li>SHOP WOMENS'S</li>
                                    <li>SHOP SOCKS</li>
                                    <li>SHOP NEW ARRIVALS</li>
                                    <li>SHOP WOMENS'S</li>
                                </ul>
                            </div>
                            :
                            <div className='items-wrapper'>
                                <div className='items-content'>
                                    {this.generateCartItems(this.state.cartItems)}
                                </div>
                                <div className='items-content-bottom'>
                                    <p>Subtotal <span>$ {subTotal} CAD</span></p>
                                    <p>Shipping <span>{shippingFee}</span></p>
                                    <p className='button' onClick={() => {
                                        toggleCartModal();
                                        this.props.history.push('/checkout');
                                    }}>CHECKOUT</p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        );
    }

};

export default withRouter(CartSlide);