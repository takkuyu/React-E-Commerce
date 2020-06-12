import React from 'react';

const ShoppingCartItem = ({ item, index, removeItem, addItem, clearItemFromCart }) => (
    <div className='items-card'>
        <img src={item.imageUrl} alt='cart-item' />
        <div className='card-inner-left'>
            <h2>{item.name}</h2>
            <p>{item.color}</p>
            <p>Size: {item.size}</p>
            <div className='item-counter'>
                <i className="fas fa-minus" onClick={() => removeItem(index)}></i>
                <span>{item.amount}</span>
                <i className="fas fa-plus" onClick={() => addItem(item, item.size)}></i>
            </div>
        </div>
        <i className="fas fa-times" onClick={() => clearItemFromCart(index)}></i>
        <p className='price'>$ {item.price}</p>
    </div>
);


export default ShoppingCartItem;