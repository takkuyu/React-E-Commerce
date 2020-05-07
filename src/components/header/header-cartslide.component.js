import React from 'react';

function deleteItem(id, size) {
    const cartItems = JSON.parse(sessionStorage.getItem('cart'));
    // const filteredItems = cartItems.filter(item => item.id !== id && item.size !== size);
    const filteredItems = cartItems.filter(item => item.id === id && item.size === size);
    console.log(filteredItems)
    console.log(cartItems.indexOf(filteredItems[0]))
}

function handleNumberOfItems(type){

    console.log(type)
}

const CartSlide = ({ toggleCartModal }) => {

    const cartItems = JSON.parse(sessionStorage.getItem('cart'));
    // console.log(cartItems)
    let i = 0;
    const addedItems = (cartItems != null ?
        cartItems.map(item => {
            // const duplicatedItem = cartItems.filter(this_item => this_item.id === item.id && this_item.size === item.size)
            // console.log(duplicatedItem)
            return (
                <div className='items-card' key={i++}>
                    <img src={item.imageUrl} alt='' />

                    <div className='card-inner-left'>
                        <h2>{item.name}</h2>
                        <p>{item.color}</p>
                        <p>Size: {item.size}</p>
                        <div className='item-counter'>
                            <i className="fas fa-minus" onClick={()=> handleNumberOfItems('minus')}></i>
                            <span>{item.amount}</span>
                            <i className="fas fa-plus" onClick={()=> handleNumberOfItems('plus')}></i>
                            </div>
                    </div>

                    <i className="fas fa-times" onClick={() => deleteItem(item.id, item.size)}></i>
                    <p className='price'>$ {item.price}</p>

                </div>
            );
        })
        :
        ''
    );

    return (
        <div className='cartslide-container'>
            <div className='blanket' onClick={toggleCartModal}></div>
            <div className='cartslide-content'>
                <div className='content-top'>
                    <i className="fas fa-arrow-right" onClick={toggleCartModal}></i>
                    <div className='empty-message'>
                        <div id="shopping-cart">
                            <span className="fa-stack has-badge" data-count="0">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <p>You're <span className="amount">$50 CAD</span> away from free shipping!</p>
                    </div>
                </div>
                {
                    cartItems === null ?
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
                                {addedItems}
                            </div>
                            <div className='items-content-bottom'>
                                <p>Subtotal <span>$270CAD</span></p>
                                <p>Shipping <span>FREE</span></p>
                                <p className='button'>CHECKOUT</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default CartSlide;