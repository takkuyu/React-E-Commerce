import React from 'react';

const ShoppingCartIcon = ({ itemsCount }) => (
    <div id="shopping-cart">
        <span className="fa-stack has-badge" data-count={itemsCount}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
        </span>
    </div>
);

export default ShoppingCartIcon;